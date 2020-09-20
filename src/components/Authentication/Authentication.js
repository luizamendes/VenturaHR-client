import React, { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { login } from "../../api/login";
import "./index.scss";

export const Authentication = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    const newUser = { ...user };
    newUser[name] = value;

    setUser({ ...newUser });
  };

  const handleLoginRequest = async () => {
    const { email, password } = user;
    try {
      const { data } = await login(email, password);
      const { token } = data;
      console.log(token);
    } catch (error) {
      console.log(error.response.status);
      // do something
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
        <Button link="/registro" buttonText="Criar conta" />
      </div>
    </div>
  );
};
