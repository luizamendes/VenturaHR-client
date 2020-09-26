import { privateClient } from "./client";

const createJob = (job) => privateClient.post("/job", { job });

export { createJob };
