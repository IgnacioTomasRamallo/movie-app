import axios from "axios";

export const AXIOS_INSTANCE = axios.create(
    {
        baseURL: import.meta.env.VITE_ENV_BASE_URL,
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ENV_API_TOKEN}`,
            Accept: 'application/json'
        }
    }
)



