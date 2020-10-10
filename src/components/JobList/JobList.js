import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const JobList = ({ title, jobs, onClick, hideHeader, noDecoration }) => {
  const renderJob = ({ id, name, description, company, city }) => (
    <Link
      className={`job-list__row ${
        noDecoration ? 'job-list__row--no-deco' : ''
      }`}
      key={id}
      to={`/vaga/${id}`}
      onClick={onClick}
    >
      <div>{name}</div>
      <div>{description}</div>
      <div>{company}</div>
      <div>{city}</div>
    </Link>
  );

  return (
    <div className="job-list">
      <h3>{title}</h3>
      {!hideHeader && (
        <div className="job-list__header job-list__row">
          <div>Cargo</div>
          <div>Descrição</div>
          <div>Empresa</div>
          <div>Cidade</div>
        </div>
      )}
      {jobs && jobs.map(renderJob)}
    </div>
  );
};
