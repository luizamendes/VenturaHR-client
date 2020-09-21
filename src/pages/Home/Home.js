import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Authentication } from "../../components/Authentication";
import { JobList } from "../../components/JobList";
import { StoreContext } from "../../store";

import "./index.scss";

export const Home = () => {
  const [{ user }] = useContext(StoreContext);
  const history = useHistory();
  const arrUser = Object.keys(user);

  if (arrUser.length) {
    history.push("/dashboard");
  }

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
