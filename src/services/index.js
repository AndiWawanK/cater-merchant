import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from "axios";

Axios.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers = {
                'Authorization': `Bearer ${token}`
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

export const apiGet = (url) => {
    return Axios.get(url).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export const apiPost = (url, body, config) => {
    return Axios.post(url, body, config).then((res) => {
        return res;
    }).catch((err) => {
        return err.response;
    })
}