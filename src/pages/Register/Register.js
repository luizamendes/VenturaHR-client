import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { doSaveUser, doSaveToken } from '../../store/actions';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PageTitle } from '../../components/PageTitle';
import { registerUser } from '../../api/user';
import { toast } from 'react-toastify';

export const Register = () => {
  const [user, setUser] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'Empresa',
    cpf: '',
    cnpj: '',
    companyName: '',
  });
  const [invalidFields, setInvalidFields] = useState({
    name: { invalid: false, reason: '' },
    address: { invalid: false, reason: '' },
    phone: { invalid: false, reason: '' },
    email: { invalid: false, reason: '' },
    password: { invalid: false, reason: '' },
    confirmPassword: { invalid: false, reason: '' },
    cpf: { invalid: false, reason: '' },
    cnpj: { invalid: false, reason: '' },
    companyName: { invalid: false, reason: '' },
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const onChange = e => {
    const { value, name } = e.target;
    const newUser = { ...user };
    newUser[name] = value;
    setUser({ ...newUser });
  };

  const manipulateField = (invalid, reason) => {
    return { invalid, reason };
  };

  const onBlur = e => {
    const { name } = e.target;
    const newInvalid = { ...invalidFields };

    if (!user[name]) {
      newInvalid[name] = manipulateField(true, 'Este campo é requerido');
    } else {
      newInvalid[name] = manipulateField(false, '');
    }

    if (name === 'email') {
      const isValid = checkEmail(user.email);
      if (!isValid) {
        newInvalid[name] = manipulateField(true, 'E-mail inválido');
      } else {
        newInvalid[name] = manipulateField(false, '');
      }
    }

    if (name === 'confirmPassword') {
      if (user.password !== user.confirmPassword) {
        newInvalid.password = manipulateField(
          true,
          'Senha e confirmação têm que ser iguais'
        );
        newInvalid[name] = manipulateField(
          true,
          'Senha e confirmação têm que ser iguais'
        );
      } else {
        newInvalid.password = manipulateField(false, '');
        newInvalid[name] = manipulateField(false, '');
      }
    }

    setInvalidFields({ ...newInvalid });
  };

  const checkEmail = value => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

    return re.test(String(value.trim()).toLowerCase());
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await registerUser(user);
      const { user: loggedUser, token } = data;

      dispatch(doSaveUser(loggedUser));
      dispatch(doSaveToken(token));
      localStorage.setItem('user', JSON.stringify(loggedUser));
      localStorage.setItem('tkn', token);
      history.push('/dashboard');
    } catch (error) {
      toast.error('Erro ao registrar usuário. Por favor, tente novamente.');
    }
  };

  return (
    <>
      <PageTitle title="Criar conta" />
      <form onSubmit={onSubmit}>
        <Input
          labelText="Nome (*)"
          name="name"
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          invalid={!!invalidFields.name.invalid}
          invalidText={invalidFields.name.reason}
        />
        <Input
          labelText="Endereço (*)"
          name="address"
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          invalid={!!invalidFields.address.invalid}
          invalidText={invalidFields.address.reason}
        />
        <Input
          labelText="Telefone (*)"
          name="phone"
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          invalid={!!invalidFields.phone.invalid}
          invalidText={invalidFields.phone.reason}
        />
        <Input
          labelText="Email"
          name="email"
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          invalid={!!invalidFields.email.invalid}
          invalidText={invalidFields.email.reason}
        />
        <Input
          labelText="Senha (*)"
          name="password"
          type="password"
          onChange={onChange}
          onBlur={onBlur}
          invalid={!!invalidFields.password.invalid}
          invalidText={invalidFields.password.reason}
        />
        <Input
          labelText="Confirmação da Senha (*)"
          name="confirmPassword"
          type="password"
          onChange={onChange}
          onBlur={onBlur}
          invalid={!!invalidFields.confirmPassword.invalid}
          invalidText={invalidFields.confirmPassword.reason}
        />
        <Input
          name="accountType"
          type="radio"
          labelText="Tipo de conta"
          options={['Empresa', 'Candidato']}
          onChange={onChange}
        />
        {user.accountType === 'Candidato' ? (
          <Input
            name="cpf"
            labelText="CPF (*)"
            onChange={onChange}
            onBlur={onBlur}
            invalid={!!invalidFields.cpf.invalid}
            invalidText={invalidFields.cpf.reason}
          />
        ) : (
          <div>
            <Input
              name="companyName"
              labelText="Razão Social (*)"
              onChange={onChange}
              onBlur={onBlur}
              invalid={!!invalidFields.companyName.invalid}
              invalidText={invalidFields.companyName.reason}
            />
            <Input
              name="cnpj"
              labelText="CNPJ (*)"
              onChange={onChange}
              onBlur={onBlur}
              invalid={!!invalidFields.cnpj.invalid}
              invalidText={invalidFields.cnpj.reason}
            />
          </div>
        )}
        <Button buttonText="Criar" />
      </form>
    </>
  );
};
