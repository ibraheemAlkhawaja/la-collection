import axios from "axios"
import Cookies from "cookies-js"

const config ={
    baseURL : "https://fakestoreapi.com",
    // baseURL: "https://travelde.pythonanywhere.com/travelapp",
    headers :{
        "Content-Type" : "application/json"
    }
}
export const PublicAxios = axios.create(config)
export const PrivetAxios = axios.create(config)
PrivetAxios.interceptors.request.use((c)=>{
    const token = Cookies.getItem("token")
    if(token) c.headers.Authorization =`Bearer ${token}`
    return c
})