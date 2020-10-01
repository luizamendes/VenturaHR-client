import { privateClient, client } from './client';

const createJob = (job) => privateClient.post('/company/jobs', { job });

const fetchLatestJobs = () => client.get('/jobs/latest');

const fetchCompanyJobs = () => privateClient.get('/company/jobs');

const fetchJobById = (id) => privateClient.get(`/jobs/${id}`);

const fetchAllJobs = () => privateClient.get('/jobs');

export {
  createJob,
  fetchLatestJobs,
  fetchCompanyJobs,
  fetchJobById,
  fetchAllJobs,
};
