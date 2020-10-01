import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchAllJobs } from '../../api/job';
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
        <Cardbox title="Suas vagas">
          {jobs.slice(0, 3).map((job) => (
            <p key={job.id}>{job.name}</p>
          ))}
          <Link to="/minhas-vagas">Ver todas</Link>
        </Cardbox>
        <Cardbox title="Mensagens do sistema">
          <p>Não há mensagens do sistema</p>
        </Cardbox>
      </div>
      <JobList jobs={jobs} />
    </>
  );
};
