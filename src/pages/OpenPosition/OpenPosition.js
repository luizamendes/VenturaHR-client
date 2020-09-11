import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PageTitle } from "../../components/PageTitle";
import "./index.scss";

export const OpenPosition = () => {
  return (
    <>
      <PageTitle title="Criar vaga" />
      <form>
        <p>Descrição</p>
        <Input labelText="Cargo" type="text" />
        <Input labelText="Descrição" type="text" />
        <Input labelText="Empresa" type="text" />
        <Input labelText="Cidade" type="text" />
        <Input labelText="Estado" type="text" />
        <Input labelText="Forma de contratação" type="text" />
        <Input labelText="Período de contratação" type="text" />
        <Input labelText="Data limite" type="text" />

        <p>Critérios</p>

        <Button buttonText="Publicar vaga" />
      </form>
    </>
  );
};
