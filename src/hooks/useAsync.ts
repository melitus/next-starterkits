import React, { useState,useCallback } from "react";

export const useAsync = ({ asyncFunction }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const execute = useCallback(
    async (...params) => {
      try {
        setLoading(true);
        const response = await asyncFunction(...params);
        setResult(response);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    },
    [asyncFunction]
  );

  return { error, result, loading, execute };
};

// to use
export default function Client() {
  const { loading, result, error, execute } = useAsync({
    asyncFunction: someAsyncTask,
  });

  async function someAsyncTask() {
    // perform async task
  }

  const handleClick = () => {
    execute();
  };

  return (
    <div>
      {loading && <p>loading</p>}
      {!loading && result && <p>{result}</p>}
      {!loading && error?.message && <p>{error?.message}</p>}
      <button onClick={handleClick} />
    </div>
  );
}