import React from "react";
import { Link } from "react-router-dom";
import { Cardbox } from "../../components/Cardbox";
import { JobList } from "../../components/JobList";
import { PageTitle } from "../../components/PageTitle";
import { jobs } from "../../mocks/jobs";
import "./index.scss";

export const Dashboard = () => {
  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="content-row">
        <Cardbox title="Suas vagas">
          {jobs.slice(0, 3).map((job) => (
            <p>{job.job}</p>
          ))}
          <Link>Ver todas</Link>
        </Cardbox>
        <Cardbox title="Mensagens do sistema">
          <p>Não há mensagens do sistema</p>
        </Cardbox>
      </div>
      <JobList />
    </>
  );
};
