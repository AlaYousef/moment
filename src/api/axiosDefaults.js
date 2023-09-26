import axios from "axios";

axios.defaults.baseURL = "https://apidjango-a1b0ccf0d7a8.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();