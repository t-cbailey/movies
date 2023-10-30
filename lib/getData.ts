import { addProgType } from "@/utils/addProgType/addProgType";
import api from "../utils/axios/axiosConfig";
import { Movie, Person, Prog, ProgType, Tv } from "@/types";

export const getMovieData = async (
  path: string,
  progType: ProgType
): Promise<any> => {
  const fetchData = api.get(path).catch(function (error) {
    if (error.response) {
      console.log(error.toJSON());
    }
  });
  const res = await fetchData;

  if (res && res.data.results) return addProgType(res.data.results, progType);
  else if (res) return addProgType([res.data], progType);
};

export const getTvData = async (
  path: string,
  progType: ProgType
): Promise<any> => {
  const fetchData = api.get(path).catch(function (error) {
    if (error.response) {
      console.log(error.toJSON());
    }
  });
  const res = await fetchData;

  if (res && res.data.results) return addProgType(res.data.results, progType);
  else if (res) return addProgType([res.data], progType);
};

export const getCastData = async (
  path: string,
  progType: ProgType
): Promise<any> => {
  const fetchData = api.get(path).catch(function (error) {
    if (error.response) {
      console.log(error.toJSON());
    }
  });
  const res = await fetchData;

  if (res && res.data.cast) return addProgType(res.data.cast, progType);
  else if (res) return addProgType([res.data], progType);
};
