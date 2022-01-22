import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const interceptors = {
  request: [
    (config: AxiosRequestConfig) => {
      return config;
    },
  ],
  response: [
    async (response: AxiosResponse) => {
      return response;
    },
  ],
  error: [
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        console.error('Un-Authorize');
      }
      throw error;
    },
  ],
};

export default interceptors;
