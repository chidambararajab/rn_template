export default {
  email: new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ),
  name: /^[a-zA-Z]+$/,
  phoneNo: /^[0-9-+()]*$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
  numberAndFloatingNumber: /^\d*\.?\d*$/,
  isEmpty(val) {
    return val === '' || val === undefined || val == null || val.length <= 0
      ? true
      : false;
  },
};
