import { client } from "./client";

const registerUser = (user) => client.post("/user", { user });

export { registerUser };
