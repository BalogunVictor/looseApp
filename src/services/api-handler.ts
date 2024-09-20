import { API_URL } from '@/config';
import axios, { AxiosError } from 'axios';

const apiHandler = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function onReqErr(error: AxiosError): Promise<AxiosError> {
  return Promise.reject(error);
}

async function onResError(error: AxiosError): Promise<AxiosError> {
  if (error.response?.status === 401 || error.response?.status === 403) {
    if (typeof window !== undefined) {
      window.location.href = '/';
    }
    return await Promise.reject(error);
  } else {
    return Promise.reject(error);
  }
}

apiHandler.interceptors.response.use((config) => config, onResError);
apiHandler.interceptors.request.use((config) => config, onReqErr);

export default apiHandler;
