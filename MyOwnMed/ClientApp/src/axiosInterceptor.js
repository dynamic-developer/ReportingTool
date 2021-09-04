import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (401 === error.response.status) {
    localStorage.removeItem('access_token');
    window.location = '/login';
  } else {
    return Promise.reject(error);
  }
});

export default axiosInstance;
