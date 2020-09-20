import { client } from "./client";

const login = (email, password, loginType = "Empresa") =>
  client.post("/login", { email, password, loginType });

export { login };
