import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Authentication } from '../../components/Authentication';
import { JobList } from '../../components/JobList';
import { StoreContext } from '../../store';
import { fetchLatestJobs } from '../../api/job';
import './index.scss';

export const Home = () => {
  const [latestJobs, setLatestJobs] = useState([]);
  const [{ user }] = useContext(StoreContext);
  const history = useHistory();
  const arrUser = Object.entries(user);

  if (arrUser.length) {
    history.push('/dashboard');
  }

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const { data } = await fetchLatestJobs();
        setLatestJobs(data);
      } catch (error) {
        toast.error('Erro ao buscar últimas vagas');
      }
    };

    fetchLatest();
  }, []);

  return (
    <div className="home">
      <section className="home__latest">
        <JobList title="Últimas vagas" jobs={latestJobs} />
      </section>
      <section className="home__login">
        <Authentication />
      </section>
    </div>
  );
};
