import axios from "axios";

const config = {
  local: "http://localhost:8080/",
};

export const request = (url, method, data) => {
  return axios({
    url: config.local + url,
    method: method,
    data: data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return false;
    });
};
export const posting = (url, method, data) => {
  return axios({
    url: config.local + url,
    method: method,
    data: data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => false);
};
