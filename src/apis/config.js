import axios from "axios";

export const axiosInstanceListMovie = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

// Add a request interceptor
axiosInstanceListMovie.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config)
    // Show loader
    config.headers['Authorization'] = 'ACCESS_TOKEN e2e1f0c5dd1ffc7d4d07e44c5158f075'
    config.headers['Accept-language'] = 'ar'
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstanceListMovie.interceptors.response.use(function (response) {
    // HIDE LOADER
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // HIDE LOADER
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});