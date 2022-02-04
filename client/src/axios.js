import axios from "axios";

export const apiInstance = axios.create({
    baseURL: 'https://localhost:5000/',
    headers:{
        'Authorization': localStorage.getItem("jwt")
    }
});