import CircularProgress from "@mui/material/CircularProgress";
import { useMemo, useState } from "react";
import useApiCall from "../hooks/useApiCall";

//
const Query = () => {
  const [fetchState, setFetchState] = useState(true);

  const { data, isLoading, error } = useApiCall(fetchState);
  const restoran = useMemo(() => data?.data && data.data.name, [data]);
  const review = useMemo(() => data?.data && data.data.review, [data]);

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
    <ul style={{ marginLeft: "15rem" }}>
      <p>Restaurant</p>

      <ol>
        <strong>name</strong>: {restoran}
      </ol>
      <ol>
        <strong>review</strong>: {review}
      </ol>
    </ul>
  );
};

export default Query;
