import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./App.scss";

import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { OpenPosition } from "./pages/OpenPosition";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/registro" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/cadastrar-vaga" component={OpenPosition} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
