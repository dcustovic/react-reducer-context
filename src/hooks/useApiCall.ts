import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { globalAxios } from "../globals/globalAxios";

const getQuery = async () => {
  try {
    const response = await globalAxios("/restaurant/random_restaurant");

    return response;
  } catch (error) {
    throw error;
  }
};

export default function useApiCall(key: string, fetchState: boolean) {
  return useQuery<AxiosResponse<any> | undefined>(key, getQuery, {
    enabled: !!fetchState,
  });
}
