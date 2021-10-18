import { useQuery } from "react-query";
import { globalAxios } from "../globals/globalAxios";

const getQuery = async () => {
  try {
    const response = await globalAxios("/app/random_app");
    return response;
  } catch (error) {
    throw error;
  }
};

export default function useApiCall() {
  return useQuery("api-call", getQuery);
}
