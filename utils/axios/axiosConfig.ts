import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
  },
});

export default api;

//auth

// const options = {
//   method: "GET",
//   url: "https://api.themoviedb.org/3/authentication",
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
