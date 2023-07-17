import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api`
})

axiosClient.interceptors.request.use( (config) => {
    
    const token = localStorage.get('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer $`
    return config;
})