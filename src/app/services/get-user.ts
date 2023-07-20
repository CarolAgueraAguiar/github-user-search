import axios from "axios";
import { UserData } from "../types/UserData";
import { ServiceRequest } from "./service-contract";

export const getUser: ServiceRequest<string, UserData> = async (
  username: string
) => {
  try {
    const { data } = await axios.get<UserData>(
      `https://api.github.com/users/${username}`
    );
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
