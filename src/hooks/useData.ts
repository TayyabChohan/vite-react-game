import { useState, useEffect } from "react";
import clientServices from "../services/clientServices";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any
) => {
  const [isData, setGenre] = useState<T[]>([]);
  const [isError, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      clientServices
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setGenre(res?.data?.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        }); // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { isData, isError, isLoading };
};
export default useData;
