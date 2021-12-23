import axios from "axios";
export const GetRequest = async (URL: string) => {
  try {
    const apiResponse = await axios.get(URL);
    const response = apiResponse.status === 200 ? apiResponse.data : {};
    return response;
  } catch (error) {
    return;
  }
};
