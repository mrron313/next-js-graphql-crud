import React from "react";  
import { useQuery } from "@apollo/client";

const Query = ({ children, query, id, type }) => {  
  const { loading, error, data, refetch } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  let responseData = null;
  if (type === 'getAllUsers')
    responseData = data.getTests;

  return ( 
    children({ data: responseData, refetch: refetch })
  );
};

export default Query;