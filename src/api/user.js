import axiosInstance from "@/axiosInstance/axios";

export function users(){
    return axiosInstance.get('http://127.0.0.1:8000/api/manage/users')
}


export function addUser(payload){
    return axiosInstance.post('http://127.0.0.1:8000/api/manage/users', payload)
}


export function updateUser(payload){
    return axiosInstance.put(`http://127.0.0.1:8000/api/manage/users/${payload.id}`, payload.data)
}

export function deleteUser(userId){
    return axiosInstance.delete(`http://127.0.0.1:8000/api/manage/users/${userId}`)
}


export function getUser(userId){
    return axiosInstance.get(`http://127.0.0.1:8000/api/manage/users/${userId}`)
}