import { privateClient } from "./client";

const createJob = (job) => privateClient.post("/company/jobs", { job });

export { createJob };
