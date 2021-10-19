import CircularProgress from "@mui/material/CircularProgress";
import { useMemo } from "react";
import useApiCall from "../hooks/useApiCall";

//
const Query = () => {
  const { data, isLoading, error } = useApiCall();

  const restoran = useMemo(() => data?.data && data.data.name, [data]);

  if (isLoading) {
    return (
      <div>
        <CircularProgress style={{ color: "#59d0ff" }} /> Loading... Please wait
      </div>
    );
  } else if (error) {
    return <div>`There was an error: ${error}`</div>;
  }

  return (
    <ul>
      <p>Restaurant</p>

      <ol>
        <strong>name</strong>: {restoran}
      </ol>
      <ol>
        <strong>review</strong>: {data?.data.review}
      </ol>
    </ul>
  );
};

export default Query;
