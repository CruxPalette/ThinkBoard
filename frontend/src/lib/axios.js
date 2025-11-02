import axios from "axios"

// in production there is no localhost so we use dynamic
const BASE_URL = import.meta.env.NODE === "development" ? "http://localhost:5001/api" : "/api";
const api = axios.create({
    baseURL : BASE_URL

})

export default api