import axios from "axios";
import router from "@/router";



const axiosInstance = axios.create();

const skipHeader = ["admin/auth/google"];

axiosInstance.defaults.baseURL = "http://127.0.0.1:8000/";
axiosInstance.interceptors.request.use((request) => {
    if(skipHeader.includes(request.url)){
        return request
    }else{
        request.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
        request.headers["device-id"] = "test-device"
        return request
    }
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error)
        if(error.response.status === 401){
            router.push({ name: "dashboard"})
        }
    }
)





export default axiosInstance