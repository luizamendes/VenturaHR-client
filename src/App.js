import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import StoreProvider from './store';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';
import './App.scss';

import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { CreateJob } from './pages/CreateJob';
import { NotFound } from './pages/NotFound';
import { PublishedJobs } from './pages/PublishedJobs';
import { JobDetails } from './pages/JobDetails';
import { Logout } from './pages/Logout';

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <StoreProvider>
          <BrowserRouter>
            <Header />
            <Main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/registro" component={Register} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/cadastrar-vaga" component={CreateJob} />
                <Route exact path="/minhas-vagas" component={PublishedJobs} />
                <Route exact path="/vaga/:id" component={JobDetails} />
                <Route exact path="/logout" component={Logout} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Main>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Footer />
          </BrowserRouter>
        </StoreProvider>
      </ReduxProvider>
    </>
  );
}

export default App;
