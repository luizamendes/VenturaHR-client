import { privateClient, client } from './client';

const createJob = job => privateClient.post('/company/jobs', { job });

const fetchLatestJobs = () => client.get('/jobs/latest');

const fetchCompanyJobs = () => privateClient.get('/company/jobs');

const fetchCandidateJobs = () => privateClient.get('/candidates/application');

const fetchJobById = id => privateClient.get(`/jobs/${id}`);

const fetchAllJobs = () => privateClient.get('/jobs');

const fetchJobByQuery = query => privateClient.get(`/jobs/search/${query}`);

export {
  createJob,
  fetchLatestJobs,
  fetchCompanyJobs,
  fetchJobById,
  fetchAllJobs,
  fetchJobByQuery,
  fetchCandidateJobs,
};
