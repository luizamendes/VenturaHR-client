import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PageTitle } from "../../components/PageTitle";
import { registerUser } from "../../api/user";
import { StoreContext } from "../../store";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "Empresa",
    cpf: "",
    cnpj: "",
    companyName: "",
  });
  const history = useHistory();
  const [, dispatch] = useContext(StoreContext);

  const onChange = (e) => {
    const { value, name } = e.target;
    const newUser = { ...user };
    newUser[name] = value;
    setUser({ ...newUser });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await registerUser(user);
      const { user: loggedUser, token } = data;

      dispatch({ type: "SET_USER", payload: loggedUser });
      localStorage.setItem("user", loggedUser.name);
      localStorage.setItem("tkn", token);
      history.push("/dashboard");
    } catch (error) {
      // error
    }
  };

  return (
    <>
      <PageTitle title="Criar conta" />
      <form onSubmit={onSubmit}>
        <Input labelText="Nome" name="name" type="text" onChange={onChange} />
        <Input
          labelText="Endereço"
          name="address"
          type="text"
          onChange={onChange}
        />
        <Input
          labelText="Telefone"
          name="phone"
          type="text"
          onChange={onChange}
        />
        <Input labelText="Email" name="email" type="text" onChange={onChange} />
        <Input
          labelText="Senha"
          name="password"
          type="password"
          onChange={onChange}
        />
        <Input
          labelText="Confirmação da Senha"
          name="confirmPassword"
          type="password"
          onChange={onChange}
        />
        <Input
          name="accountType"
          type="radio"
          labelText="Tipo de conta"
          options={["Candidato", "Empresa"]}
          onChange={onChange}
        />
        {user.accountType === "Candidato" ? (
          <Input name="cpf" labelText="CPF" onChange={onChange} />
        ) : (
          <div>
            <Input
              name="companyName"
              labelText="Razão Social"
              onChange={onChange}
            />
            <Input name="cnpj" labelText="CNPJ" onChange={onChange} />
          </div>
        )}
        <Button buttonText="Criar" />
      </form>
    </>
  );
};
