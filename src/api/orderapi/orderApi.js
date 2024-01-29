import jwtAxios from "../../util/jwtUtil";
import { API_SERVER_HOST } from "../../util/util";

// http://192.168.0.144:5223/api/order/100004
const host = `${API_SERVER_HOST}/api/order/`;

export const getOCPage = async (setData, iorder) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    // 파라메터는 JWT 인증으로 해결할 것이다.
    const res = await jwtAxios.get(`${host}${iorder}`, header);
    setData(res.data);
    console.log(res.data);
  } catch (error) {
    console.log("error", error);
    return null;
  }
};


