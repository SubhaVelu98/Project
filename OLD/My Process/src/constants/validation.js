export default {
  email: new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  name: /^[a-zA-Z]+$/,
  phoneNo: new RegExp(/^[0-9]+$/),
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  isEmpty(val) {
    return val === "" || val === undefined || val == null || val.length <= 0
      ? true
      : false;
  },
};
