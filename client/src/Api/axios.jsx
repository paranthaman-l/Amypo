import axios from'axios'

const authApi = axios.create({
    baseURL:import.meta.env.VITE_APP_AUTH_BASE_URL
})
const adminApi = axios.create({
    baseURL:import.meta.env.VITE_APP_ADMIN_BASE_URL
})
const developerApi = axios.create({
    baseURL:import.meta.env.VITE_APP_DEVELOPER_BASE_URL
})
const contentDeveloperApi = axios.create({
    baseURL:import.meta.env.VITE_APP_CONTENTDEVELOPER_BASE_URL
})

const commonApi = axios.create({
    baseURL:import.meta.env.VITE_APP_COMMONAPI_BASE_URL
})

export {authApi,adminApi,developerApi,contentDeveloperApi,commonApi}