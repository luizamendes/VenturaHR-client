import React from "react";
import { Link } from "react-router-dom";
import { jobs } from "../../mocks/jobs";
import "./index.scss";

export const JobList = ({ title }) => {
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
