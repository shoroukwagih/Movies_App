
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})

axiosInstance.interceptors.request.use(function(config){
   config.params={
    ...config.params,
    api_key: '7baba8761b38f963931183a3883d5121'
   };
   return config ;
} , function (error) {
    return Promise.reject(error)
}
);

axiosInstance.interceptors.request.use(function (response){
    return response;

},function(error){
    return Promise.reject(error);
}
);
export default axiosInstance;
