import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const JobList = ({ title }) => {
  const jobs = [
    {
      id: "1",
      job: "Front End Engineer",
      description: "Desenvolvedor front end com experiência em React e Node.",
      city: "Rio de Janeiro",
    },
    {
      id: "2",
      job: "Front End Engineer",
      description: "Desenvolvedor front end..",
      city: "Vila Bela da Santíssima Trindade",
    },
    {
      id: "3",
      job: "Front End Engineer",
      description: "Desenvolvedor front end com experiência em React e Node.",
      city: "Vila Bela da Santíssima Trindade",
    },
    {
      id: "4",
      job: "Front End Engineer",
      description: "Desenvolvedor front end com experiência em React e Node.",
      city: "Rio de Janeiro",
    },
    {
      id: "5",
      job: "Front End Engineer",
      description: "Desenvolvedor front end..",
      city: "Vila Bela da Santíssima Trindade",
    },
    {
      id: "6",
      job: "Front End Engineer",
      description: "Desenvolvedor front end com experiência em React e Node.",
      city: "Vila Bela da Santíssima Trindade",
    },
    {
      id: "7",
      job: "Front End Engineer",
      description: "Desenvolvedor front end com experiência em React e Node.",
      city: "Rio de Janeiro",
    },
    {
      id: "8",
      job: "Front End Engineer",
      description: "Desenvolvedor front end..",
      city: "Vila Bela da Santíssima Trindade",
    },
    {
      id: "9",
      job: "Front End Engineer",
      description: "Desenvolvedor front end com experiência em React e Node.",
      city: "Vila Bela da Santíssima Trindade",
    },
    {
      id: "10",
      job: "Front End Engineer",
      description: "Desenvolvedor front end com experiência em React e Node.",
      city: "Vila Bela da Santíssima Trindade",
    },
  ];

  const renderJob = ({ id, job, description, city }) => (
    <Link className="job-list__row" key={id}>
      <div>{job}</div>
      <div>{description}</div>
      <div>{city}</div>
    </Link>
  );

  return (
    <div className="job-list">
      <h3>{title}</h3>
      <div className="job-list__header job-list__row">
        <div>Cargo</div>
        <div>Descrição</div>
        <div>Cidade</div>
      </div>
      {jobs.map(renderJob)}
    </div>
  );
};
