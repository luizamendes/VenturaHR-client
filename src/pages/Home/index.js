import React from "react";
import { Authentication } from "../../components/Authentication";
import "./index.scss";

export const Home = () => {
  return (
    <div className="home">
      <section className="home__latest">Vagas</section>
      <section className="home__login">
        <Authentication />
      </section>
    </div>
  );
};
