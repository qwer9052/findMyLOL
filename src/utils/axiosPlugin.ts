import axios from 'axios';

export let backServerUrl = 'http://127.0.0.1:8080';

export const axiosInstance = axios.create({
  baseURL: `${backServerUrl}`,
});
axiosInstance.interceptors.request.use(
  async (config: any) => {
    config.headers['Content-Type'] = 'application/json;';
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export const getAxios = (url: string, param: any) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(url + param, { headers: { withCredentials: true } })
      .then(resolve)
      .catch(_rejectHandler);
  });
};

export const postAxios = (url: string, param: any) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(url, param).then(resolve).catch(_rejectHandler);
  });
};

const _rejectHandler = (err: any) => {
  alert(err);
};
