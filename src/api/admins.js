import axiosInstance from "@/axiosInstance/axios";

export function getAdmins(){
    return axiosInstance.get("http://127.0.0.1:8000/api/manage/admins")
}

export function addAdmin(payload){
    return axiosInstance.post("http://127.0.0.1:8000/api/manage/admins", payload)
}

export function updateAdmin(payload){
    return axiosInstance.put(`http://127.0.0.1:8000/api/manage/admins/${payload.id}`, payload.data)
}


export function deleteAdmin(adminId){
    return axiosInstance.delete(`http://127.0.0.1:8000/api/manage/admins/${adminId}`);
}

export function getAdmin(adminId){
    return axiosInstance.get(`http://127.0.0.1:8000/api/manage/admins/${adminId}`);
}