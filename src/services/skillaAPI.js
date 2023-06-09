import { Axios } from "axios";
import { SERVER_URL, ENDPOINTS } from "@/constant/api_endpoints";

const skillaAPI = (token) => {
  const axios = new Axios({
    baseURL: SERVER_URL,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return ({
    getList: async () => {
      const response = await axios.post(`/${ENDPOINTS.CALLS}`);
      return JSON.parse(response.data);
    },
  });
};

export default skillaAPI;