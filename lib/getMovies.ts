import React from "react";
import api from "../utils/axios/axiosConfig";

export default async function getMovies(query: string) {
  const res = await api.get(query);
  return res.data;
}
