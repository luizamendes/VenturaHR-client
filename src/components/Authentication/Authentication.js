import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./index.scss";

export const Authentication = () => {
  return (
    <div className="authentication">
      <div className="authentication__login">
        <h3>Já tenho conta</h3>
        <Input labelText="E-mail" type="text" />
        <Input labelText="Senha" type="password" />
        <Button buttonText="Entrar" />
      </div>
      <div className="authentication__register">
        <h3>Ainda não possuo conta</h3>
        <Button link="/registro" buttonText="Criar conta" />
      </div>
    </div>
  );
};
