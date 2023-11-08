import axios from "axios"

const instance = axios.create({
    baseURL:process.env.EVANGADI_FORUM_BACKEND_BASE_URL // Use http instead of https, and include the correct port number
})

export default instance;