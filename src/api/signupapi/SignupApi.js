import axios from "axios";

const host = "http://192.168.0.144:5223/api/user";

export const postSign = async ({ values, successFn, failFn, errFn }) => {
  try {
    const res = await axios.post(`${host}/sign-up`, { ...values });
    console.log(res);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return successFn(res.data);
    } else {
      return failFn(status.error);
    }
  } catch (error) {
    errFn(error);
  }
};

export const getSign = async () => {
  try {
    const res = await axios.get(`${host}/sign-up`);
    console.log(res);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return res.data;
    } else {
      return "잘못된 정보를 전달함.";
    }
  } catch (error) {
    console.log(error);
  }
};

export const postSignCheck = async () => {
  try {
    const res = await axios.post(`${host}/sign-up/check`);
    console.log(res);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return res.data;
    } else {
      return "잘못된 정보를 전달함.";
    }
  } catch (error) {
    console.log(error);
  }
};

export const putModify = async () => {
  try {
    const res = await axios.put(`${host}/modify`);
    console.log(res);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return res.data;
    } else {
      return "잘못된 정보를 전달함.";
    }
  } catch (error) {
    console.log(error);
  }
};

export const postModify = async () => {
  try {
    const res = await axios.post(`${host}/modify`);
    console.log(res);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return res.data;
    } else {
      return "잘못된 정보를 전달함.";
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteModify = async () => {
  try {
    const res = await axios.delete(`${host}/modify`);
    console.log(res);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return res.data;
    } else {
      return "잘못된 정보를 전달함.";
    }
  } catch (error) {
    console.log(error);
  }
};
