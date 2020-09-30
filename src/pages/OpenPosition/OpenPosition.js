import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { NewCriteriaLine } from "../../components/NewCriteriaLine";
import { PageTitle } from "../../components/PageTitle";
import { generateId } from "../../utils";
import { createJob } from "../../api/job";

import "./index.scss";

export const OpenPosition = () => {
  const [job, setJob] = useState({
    name: "",
    description: "",
    company: "",
    city: "",
    state: "",
    contractType: "",
    contractDuration: "",
    openUntil: "",
  });
  const [criteria] = useState({
    id: generateId(),
    name: "",
    description: "",
    profile: "1",
    weigth: "1",
  });
  const [criteriaList, setCriteriaList] = useState([criteria]);
  console.log("OpenPosition -> criteriaList", criteriaList);

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

  const handleJobCreation = async (e) => {
    e.preventDefault();
    console.log("here");
    const newJob = {
      ...job,
      criteriaList,
    };

    try {
      await createJob(newJob);
    } catch (error) {
      console.log("error creating job");
    }
  };

  return (
    <>
      <PageTitle title="Criar vaga" />
      <form onSubmit={handleJobCreation}>
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
          name="contractDuration"
          value={contractDuration}
          onChange={onChange}
        />
        <Input
          labelText="Data limite"
          type="text"
          name="openUntil"
          value={openUntil}
          onChange={onChange}
        />

        <h3>Critérios</h3>
        <NewCriteriaLine
          criteriaList={criteriaList}
          setCriteriaList={setCriteriaList}
        />
        <Button type="submit" buttonText="Publicar vaga" />
      </form>
    </>
  );
};
