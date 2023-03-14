import axios from "./axios.instance";

export function doGet({ url, config = {} }) {
  return axios.get(url, {
    ...config,
  });
}

export function doPost({ url, data, config = {} }) {
  return axios.post(url, data, {
    ...config,
  });
}
