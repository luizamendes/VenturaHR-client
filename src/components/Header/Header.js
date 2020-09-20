import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>VenturaHR</h1>
      </Link>
    </header>
  );
};
