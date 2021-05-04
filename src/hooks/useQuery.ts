import React from 'react';

const useQuery = ({ url }) => {
  const [statusCode, setStatusCode] = React.useState();
  const [apiData, setApiData] = React.useState();

  React.useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(({ code, status, ...apiData }) => {
        setStatusCode(code)
        setApiData(apiData);
      });
  }, [url]);

  return { data: apiData, statusCode }
}

// to use

 const { data, statusCode } = useQuery({
    url: `https://dog.ceo/api/breed/${breed}/images/random`
  });