import axiosConfig from "../config/axios";
import { REGISTER } from "../config/axios/apiEndpointConstant";
export const registerAPICall = (params) => {
  return axiosConfig()
    .post(REGISTER, params)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
};
