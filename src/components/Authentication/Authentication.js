import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doSaveUser, doSaveToken } from '../../store/actions';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button';
import { Input } from '../Input';
import { login } from '../../api/login';
import './index.scss';

export const Authentication = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const history = useHistory();
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.target;
    const newUser = { ...user };
    newUser[name] = value;

    setUser({ ...newUser });
  };

  const handleLoginRequest = async () => {
    const { email, password } = user;
    try {
      const { data } = await login(email, password);
      const { user: loggedUser, token } = data;
      console.log('handleLoginRequest -> storageUser', loggedUser);

      dispatch(doSaveUser(loggedUser));
      dispatch(doSaveToken(token));
      localStorage.setItem('user', JSON.stringify(loggedUser));
      localStorage.setItem('tkn', token);
      history.push('/dashboard');
    } catch (error) {
      console.log(error.response.status);
    }
  };

  return (
    <div className="authentication">
      <div className="authentication__login">
        <h3>Já tenho conta</h3>
        <Input
          name="email"
          labelText="E-mail"
          type="text"
          onChange={onChange}
        />
        <Input
          name="password"
          labelText="Senha"
          type="password"
          onChange={onChange}
        />
        <Button buttonText="Entrar" onClick={handleLoginRequest} />
      </div>
      <div className="authentication__register">
        <h3>Ainda não possuo conta</h3>
        <Button link="/registro" kind="secondary" buttonText="Criar conta" />
      </div>
    </div>
  );
};
