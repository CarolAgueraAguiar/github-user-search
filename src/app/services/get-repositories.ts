import axios from "axios";
import { Repositores } from "../types/Repositories";
import { ServiceRequest } from "./service-contract";

export const getRepositories: ServiceRequest<string, Repositores[]> = async (
  username: string
) => {
  try {
    const { data } = await axios.get<Repositores[]>(
      `https://api.github.com/users/${username}/repos`
    );

    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
