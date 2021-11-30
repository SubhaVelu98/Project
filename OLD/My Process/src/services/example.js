import axiosConfig from '../config/axios';
import {TODOS} from '../config/axios/apiEndpointConstant';

export const exampleApiCall = params => {
  return axiosConfig()
    .get(TODOS, params)
    .then(function (response) {
      let blankArray = [];
      if (response.data) {
        for (let index = 0; index < 15; index++) {
          blankArray.push(response.data[index]);
        }
      }
      return blankArray;
    })
    .catch(function (error) {
      throw error;
    });
};
