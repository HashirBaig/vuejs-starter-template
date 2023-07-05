import axios from "axios"
import * as apiURLs from "./apiURLs"
import environment from "@/config/environment"

const baseConfig = {
  baseURL: `${environment.API_URL}`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
}

// Basic configuration for HTTP calls
const api = axios.create(baseConfig)

// api.interceptors.request.use(config => {
//     if (localStorage.token) {
//         config.headers["x-auth-token"] = localStorage.token
//     }

//     return config
// })

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

// api.interceptors.response.use(
//     res => res,
//     err => {
//         if (err.messages.includes(401)) {
//             // logout user
//         }

//         return Promise.reject(err)
//     }
// )

// --- USERS --- //
export async function loginUser(credentials) {
  return api.post(`${apiURLs.USERS}/Login`, credentials)
}
export async function gaUser(data) {
  return api.post(`${apiURLs.USERS}/Ga`, data)
}

export default api
