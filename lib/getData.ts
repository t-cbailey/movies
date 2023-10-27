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
};

export const getPersonData = async (path: string, progType: ProgType) => {
  const fetchData = api.get(path).catch(function (error) {
    if (error.response) {
      console.log(error.toJSON());
    }
  });
  const res = await fetchData;

  if (res && res.data.results) return addProgType(res.data.results, progType);
};
