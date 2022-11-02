import {http} from "../plugins/Axios"

export const githubRepositories = async () => {
    return http.get("users/tanitoluwam/repos")
}

