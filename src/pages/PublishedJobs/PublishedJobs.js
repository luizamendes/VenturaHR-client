import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchCompanyJobs } from '../../api/job';
import { JobList } from '../../components/JobList';
import { PageTitle } from '../../components/PageTitle';
import './index.scss';

export const PublishedJobs = () => {
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await fetchCompanyJobs();
        setMyJobs(data);
      } catch (error) {
        toast.error('Erro ao buscas vagas ', error.message);
      }
    };

    fetchJobs();
  }, []);

  const renderJobs = () => {
    if (myJobs.length === 0) {
      return <p>Você ainda não criou nenhuma vaga.</p>;
    }

    return <JobList title="" jobs={myJobs} />;
  };

  return (
    <>
      <PageTitle title="Minhas vagas" />
      {renderJobs()}
    </>
  );
};
