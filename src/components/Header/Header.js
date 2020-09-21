import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store";
import "./index.scss";

export const Header = () => {
  const [{ user }] = useContext(StoreContext);

  return (
    <header className="header">
      <Link to="/">
        <h1>VenturaHR</h1>
      </Link>
      {user.name && <p className="header__greetings">Olá, {user.name}</p>}
    </header>
  );
};
