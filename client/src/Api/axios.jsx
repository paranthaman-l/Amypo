import axios from'axios'

const authApi = axios.create({
    baseURL:import.meta.env.VITE_APP_AUTH_BASE_URL
})
const adminApi = axios.create({
    baseURL:import.meta.env.VITE_APP_ADMIN_BASE_URL
})

export {authApi,adminApi}