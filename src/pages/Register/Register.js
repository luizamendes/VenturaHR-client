import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const Register = () => {
  const [accountType, setAccountType] = useState("candidate");

  return (
    <>
      <h2 style={{ marginTop: "0" }}>Criar conta</h2>
      <form>
        <Input labelText="Nome" type="text" />
        <Input labelText="Endereço" type="text" />
        <Input labelText="Telefone" type="text" />
        <Input labelText="Email" type="text" />
        <Input labelText="Senha" type="password" />
        <Input labelText="Confirmação da Senha" type="password" />
        <Input
          type="radio"
          labelText="Tipo de conta"
          options={["Candidato", "Empresa"]}
          onChange={(e) => setAccountType(e.target.value)}
        />
        {accountType === "Candidato" ? (
          <Input labelText="CPF" />
        ) : (
          <div>
            <Input labelText="Razão Social" />
            <Input labelText="CNPJ" />
          </div>
        )}
        <Button buttonText="Criar" />
      </form>
    </>
  );
};
