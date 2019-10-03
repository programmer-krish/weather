import axios from "axios";
import { fullUrl } from "../config";

export function getWeather(city) {
  return axios(`${fullUrl}${city}`);
}

export function handleResponse(res) {
  let data = null,
    error = null;
  switch (res.status) {
    case 404:
    case 400:
      console.log(`case 4xx: ${res.status}`, res);
      error = res.data.message;
      break;
    case 200:
      console.log("case 200");
      data = res.data;
      break;
    default:
      break;
  }
  return [data, error];
}
