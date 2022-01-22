import axios from 'axios';
import '@/utils/axios-interceptors';
import { getToken } from './local-storage';

axios.defaults.timeout = 90000; // 90s
axios.defaults.baseURL = process.env.API_SERVER_URL;
const token = getToken();
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.common['Content-Type'] = `application/json`;

export default axios;
