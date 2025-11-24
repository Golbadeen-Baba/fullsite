import React from "react";

const getbooks = async () => {
  const url = "http://127.0.0.1:8000/api/books";
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getbooks;
