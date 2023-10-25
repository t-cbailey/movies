import api from "../utils/axios/axiosConfig";

export const getProgData = async (path: string, progType?: string) => {
  const fetchData = api.get(path).catch(function (error) {
    if (error.response) {
      console.log(error.toJSON());
    }
  });
  const res = await fetchData;

  if (res && res.data.results) return res.data.results;
  else if (res) return res.data;
};
