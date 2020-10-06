import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchJobById } from '../../api/job';
import { PageTitle } from '../../components/PageTitle';
import './index.scss';

export const JobDetails = props => {
  const { id } = useParams();
  const [job, setJob] = useState(props.job);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const { data } = await fetchJobById(id);
        setJob(data);
      } catch (error) {
        toast.error('Erro ao obter vaga', error.message);
      }
    };

    if (!props.job) {
      fetchJob();
    }
  }, [id, props.job]);

  const renderJobDetails = () => {
    if (!job) return null;
    const {
      name,
      description,
      company,
      city,
      state,
      contractType,
      contractDuration,
      openUntil,
      criteriaList,
    } = job;
    return (
      <>
        <p>
          <strong>Nome:</strong> {name}
        </p>
        <p>
          <strong>Descrição:</strong> {description}
        </p>
        <p>
          <strong>Empresa:</strong> {company}
        </p>
        <p>
          <strong>Local:</strong> {`${city} / ${state}`}
        </p>
        <p>
          <strong>Contratação:</strong> {contractType}
        </p>
        <p>
          <strong>Duração do contrato:</strong> {contractDuration}
        </p>
        <p>
          <strong>Disponível até:</strong> {openUntil}
        </p>
        <div>
          <strong>Critérios</strong>
          {criteriaList.map(({ id, name, description, profile, weigth }) => (
            <p key={id}>{`${name}: ${description}`}</p>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <PageTitle title="Detalhes da vaga" />
      {renderJobDetails()}
    </>
  );
};
