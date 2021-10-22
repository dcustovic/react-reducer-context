import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import useApiCall from "../hooks/useApiCall";

const QueryClick = () => {
  const [fetchState, setFetchState] = useState(false);

  const { data, isLoading, error, refetch } = useApiCall(
    "click-restaurant",
    fetchState
  );

  const restoran = React.useMemo(() => data?.data && data.data.name, [data]);
  const review = React.useMemo(() => data?.data && data.data.review, [data]);
  if (error) {
    return <div>`There was an error: ${error}`</div>;
  }

  function getRestaurant() {
    setFetchState(true);
    if (fetchState === true) {
      refetch();
    }
  }

  return (
    <div style={{ marginLeft: "15rem" }}>
      <ul>
        <Button variant="contained" onClick={getRestaurant}>
          Fetch data
          {isLoading && (
            <CircularProgress
              style={{ color: "#59d0ff", marginLeft: ".6rem" }}
              size={25}
            />
          )}
        </Button>
      </ul>

      <ul>
        <p>Restaurant</p>
        <ol>
          <strong>name</strong>: {restoran}
        </ol>
        <ol>
          <strong>review</strong>: {review}
        </ol>
      </ul>
    </div>
  );
};

export default QueryClick;
