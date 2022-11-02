import axios from "Axios";

export const http = axios.create({
    baseURL: "https://api.github.com/",
})