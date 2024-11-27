import axios, { AxiosPromise } from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT;
axios.defaults.timeout = import.meta.env.VITE_API_TIMEOUT;
axios.defaults.headers['content-type'] = 'application/json';
axios.defaults.auth = {
    username: import.meta.env.VITE_BASIC_AUTH_USER,
    password: import.meta.env.VITE_BASIC_AUTH_PASSWORD,
}

axios.interceptors.response.use(
 (response)=> {
    return response;
 },
 (error) => {
    if (error.response.status >= 500) {
        console.error(error.response?.data?.detail);
        location.href = 'error';
    } else {
        return Promise.reject(error);
    }
 }
);

export const axiosGet = (url: string, params?: object) => {
    return axios.get(url, { params });
}

export const axiosPost = (url: string, body?: object): AxiosPromise => {
    return axios.post(url, body);
}

export const axiosPut = (url: string, body?: object): AxiosPromise => {
    return axios.put(url, body);
}

export const axiosPatch= (url: string, body?: object): AxiosPromise => {
    return axios.patchForm(url, body);
}

export const axiosDelete = (url: string, body?: object): AxiosPromise => {
    return axios.delete(url, body);
}
