import React from "react";
import { Authentication } from "../../components/Authentication";
import { JobList } from "../../components/JobList";
import "./index.scss";

export const Home = () => {
  return (
    <div className="home">
      <section className="home__latest">
        <JobList title="Últimas vagas" />
      </section>
      <section className="home__login">
        <Authentication />
      </section>
    </div>
  );
};
