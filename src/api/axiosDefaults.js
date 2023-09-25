import axios from "axios";

axios.defaults.baseURL="https://moment-alaa-ce3e92901a21.herokuapp.com";
axios.defaults.headers.post['Content-type'] = 'multipart/form-data';
axios.defaults.withCredentials=true