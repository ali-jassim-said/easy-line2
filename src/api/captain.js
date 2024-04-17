import axiosInstance from "@/axiosInstance/axios"

export function getCaptain(){
    return axiosInstance.get(`http://127.0.0.1:8000/api/manage/captains`)
}

export function addCaptain(payload){
    return axiosInstance.post(`http://127.0.0.1:8000/api/manage/captains`, payload)
}

export function deleteCap(captainId){
    return axiosInstance.delete(`http://127.0.0.1:8000/api/manage/captains/${captainId}`)
}

export function updateCaptain(payload){
    return axiosInstance.put(`http://127.0.0.1:8000/api/manage/captains/${payload.id}`, payload.data)
}