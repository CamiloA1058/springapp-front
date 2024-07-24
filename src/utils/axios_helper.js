import axios from "axios"

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.post["Content-Type"] = "application/json"


const getAuthToken = () => {
    return window.localStorage.getItem("jwtToken")
} 

export const setAuthToken = (jwtToken) => {
    window.localStorage.setItem("jwtToken", jwtToken)
}

export const req = (method, url, data) => {
    let headers = {}
    if(getAuthToken() !== null && getAuthToken() !== "null"){
        headers = {
            'Authorization' : `Bearer ${getAuthToken()}`
        }
    }
    return axios({
        method: method,
        headers: headers,
        url: url,
        data: data
    })
}