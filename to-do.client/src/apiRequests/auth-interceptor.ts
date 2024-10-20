import axios from "axios"

export const api = axios.create({
    baseURL: 'https://localhost:7253/api'
})

api.interceptors.request.use(
    config => {
        const token = JSON.parse(sessionStorage.getItem('jwt-token')!)
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;

        }
        config.headers['Content-Type'] = 'application/json; charset=utf-8';
        return config
    },
    error => {
        Promise.reject(error)
    }
    
)

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors (e.g., token expiration)
        if (error.response && error.response.status === 401) {
            // Redirect to login or handle unauthorized access
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
