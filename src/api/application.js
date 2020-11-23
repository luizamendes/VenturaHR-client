import { privateClient } from './client';

const fetchApplicationsByJobId = jobId =>
  privateClient.get(`/applications/${jobId}`);

export { fetchApplicationsByJobId };
