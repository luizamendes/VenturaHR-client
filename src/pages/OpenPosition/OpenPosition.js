import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { NewCriteriaLine } from "../../components/NewCriteriaLine";
import { PageTitle } from "../../components/PageTitle";
import "./index.scss";

export const OpenPosition = () => {
  const [job, setJob] = useState({
    name: "",
    description: "",
    company: "",
    city: "",
    state: "",
    contractType: "",
    contractTime: "",
    jobDue: "",
  });
  const [criteriaList, setCriteriaList] = useState([]);

  const {
    name,
    description,
    company,
    city,
    state,
    contractType,
    contractTime,
    jobDue,
  } = job;

  const onChange = (e) => {
    const { value, name } = e.target;
    const newJob = { ...job };
    newJob[name] = value;
    setJob({ ...newJob });
  };

  return (
    <>
      <PageTitle title="Criar vaga" />
      <form>
        <h3>Descrição</h3>
        <Input
          labelText="Cargo"
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
        <Input
          labelText="Descrição"
          type="text"
          name="description"
          value={description}
          onChange={onChange}
        />
        <Input
          labelText="Empresa"
          type="text"
          name="company"
          value={company}
          onChange={onChange}
        />
        <Input
          labelText="Cidade"
          type="text"
          name="city"
          value={city}
          onChange={onChange}
        />
        <Input
          labelText="Estado"
          type="text"
          name="state"
          value={state}
          onChange={onChange}
        />
        <Input
          labelText="Forma de contratação"
          type="text"
          name="contractType"
          value={contractType}
          onChange={onChange}
        />
        <Input
          labelText="Período de contratação"
          type="text"
          name="contractTime"
          value={contractTime}
          onChange={onChange}
        />
        <Input
          labelText="Data limite"
          type="text"
          name="jobDue"
          value={jobDue}
          onChange={onChange}
        />

        <h3>Critérios</h3>
        <NewCriteriaLine />
        <Button buttonText="Publicar vaga" />
      </form>
    </>
  );
};
