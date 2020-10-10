import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchAllJobs } from '../../api/job';
import { Button } from '../../components/Button';
import { Cardbox } from '../../components/Cardbox';
import { JobList } from '../../components/JobList';
import { PageTitle } from '../../components/PageTitle';
import './index.scss';

export const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const { data } = await fetchAllJobs();
        setJobs(data);
      } catch (error) {
        toast.error('Erro ao buscar vagas');
      }
    };

    fetchLatest();
  }, []);

  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="content-row">
        <Cardbox title="Suas vagas" className="my-jobs">
          <JobList jobs={jobs.slice(0, 3)} hideHeader noDecoration />
          <div className="my-jobs__actions">
            <Button link="/minhas-vagas" kind="link" buttonText="Ver todas" />
            <Button
              link="/cadastrar-vaga"
              kind="link"
              buttonText="Criar vaga"
            />
          </div>
        </Cardbox>
      </div>
      <JobList title="Todas as vagas" jobs={jobs} />
    </>
  );
};
