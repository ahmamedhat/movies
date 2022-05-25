import Config from "react-native-config";
const axios = require('axios');
import * as AxiosLogger from 'axios-logger';
import { Endpoints } from "../../shared/constants";


const instance = axios.create({
    baseURL: Config.BASE_URL,
    defaultInterceptors: true
});

instance.interceptors.request.use((request) => {
    // console.log('request', request);
    console.log('url', Config.BASE_URL);
    console.log('api', Config.API_KEY);
    console.log('images', Config.IMAGES_URL);
    
    
    return AxiosLogger.requestLogger(request);
});

instance.interceptors.response.use((response) => {
    console.log('response', response);
    
    return AxiosLogger.responseLogger(response);
}, (error) => {
    console.log('error api', error);
 
    
    return Promise.reject(error);
});

enum RequestType {
    GET,
    POST,
    PUT,
    DELETE
}

function request(type: RequestType, url: string, body: any = {}) {
    switch (type) {
        case RequestType.GET: return instance.get(url, {params: body})
        case RequestType.POST: return instance.post(url, body)
        case RequestType.PUT: return instance.put(url, body)
        case RequestType.DELETE: return instance.delete(url)
    }
}


export function fetchMovies(page: string) {
    return request(RequestType.GET, Endpoints.MOVIES,{api_key: Config.API_KEY, page: page})
}
