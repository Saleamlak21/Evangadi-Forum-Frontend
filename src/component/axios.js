import axios from "axios"

const instance = axios.create({
    baseURL:"https://dark-plum-bluefish-yoke.cyclic.app" // Use http instead of https, and include the correct port number
})

export default instance;