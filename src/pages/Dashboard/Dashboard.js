import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import {
  fetchAllJobs,
  fetchCompanyJobs,
  fetchJobByQuery,
  fetchCandidateJobs,
} from '../../api/job';
import { Button } from '../../components/Button';
import { Cardbox } from '../../components/Cardbox';
import { JobList } from '../../components/JobList';
import { PageTitle } from '../../components/PageTitle';
import { Search } from '../../components/Search';
import { StoreContext } from '../../store';
import './index.scss';

export const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [userJobs, setUserJobs] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [jobListTitle, setJobListTitle] = useState('Todas as vagas');
  const [{ user }] = useContext(StoreContext);

  const fetchLatest = async () => {
    try {
      const { data } = await fetchAllJobs();
      setJobs(data);
    } catch (error) {
      toast.error('Erro ao buscar vagas');
    }
  };

  const fetchUserJobs = async () => {
    try {
      const fetchFunction =
        user.accountType === 'Empresa' ? fetchCompanyJobs : fetchCandidateJobs;
      const { data } = await fetchFunction();
      setUserJobs(data);
    } catch (error) {
      toast.error('Erro ao buscar vagas');
    }
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  useEffect(() => {
    fetchUserJobs();
  }, []); //eslint-disable-line

  const handleSearch = async () => {
    try {
      let results = [];
      if (searchValue) {
        const { data } = await fetchJobByQuery(searchValue);
        results = data;
        setJobListTitle(`Mostrando resultados incluindo "${searchValue}"`);
      } else {
        const { data } = await fetchAllJobs(searchValue);
        results = data;
      }
      setJobs(results);
    } catch (error) {
      toast.error('Erro ao buscar vagas');
    }
  };

  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="content-row">
        <Cardbox title="Suas vagas" className="my-jobs">
          <JobList jobs={userJobs.slice(0, 3)} hideHeader noDecoration />
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
      <Search
        searchValue={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onClick={handleSearch}
      />
      <JobList title={jobListTitle} jobs={jobs} />
    </>
  );
};
