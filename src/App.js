import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/registro" component={Register} />
          </Switch>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
