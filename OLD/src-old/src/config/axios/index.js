import axios from "axios";
import apiConstants from "./constant";
export default function axiosApi() {
  return axios.create({
    baseURL: apiConstants.devURL,
    timeout: apiConstants.timeout,
    headers: apiConstants.applicationJsonHeader,
  });
}
