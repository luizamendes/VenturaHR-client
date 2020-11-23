import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchJobById } from '../../api/job';
import { fetchApplicationsByJobId } from '../../api/application';
import { Button } from '../../components/Button';
import { PageTitle } from '../../components/PageTitle';
import './index.scss';

export const JobDetails = props => {
  const { id } = useParams();
  const [job, setJob] = useState(props.job);
  const [applications, setApplications] = useState([]);
  const [showApplications, setShowApplications] = useState(false);
  const [buttonText, setButtonText] = useState('Mostrar candidaturas');
  const [buttonKind, setButtonKind] = useState('primary');

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

  const handleGetApplications = async () => {
    if (showApplications) {
      setButtonText('Mostrar candidaturas');
      setShowApplications(false);
      setButtonKind('primary');
      return;
    }

    try {
      const { data } = await fetchApplicationsByJobId(id);
      console.log('data', data);
      setApplications(data);
      setShowApplications(true);
      setButtonKind('secondary');
      setButtonText('Esconder candidaturas');
    } catch (error) {
      toast.error('Erro ao obter candidaturas');
    }
  };

  const renderPMD = () => {
    return (
      <p>
        <strong>PMD da vaga:</strong> {job.average}
      </p>
    );
  };

  const renderApplications = () => {
    if (applications.length === 0) {
      return <p>Essa vaga ainda não possui candidaturas</p>;
    }

    return applications.map(application => {
      return (
        <div className="application__result">
          <p>
            <span>Candidato:</span> {application.applicant.name}
          </p>
          <p>
            <span>E-mail:</span> {application.applicant.email}
          </p>
          <p>
            <span>Resultado da aplicação:</span> {application.result}
          </p>
        </div>
      );
    });
  };

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
          {criteriaList.map(({ id, name, description, profile, weight }) => (
            <p key={id}>{`${name}: ${description}`}</p>
          ))}
        </div>
        <Button
          kind={buttonKind}
          buttonText={buttonText}
          onClick={handleGetApplications}
        />
        {showApplications ? (
          <>
            {renderPMD()}
            {renderApplications()}
          </>
        ) : null}
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
