import axiosInstance from "@/axiosInstance/axios";

export function subscriptions(){
    return axiosInstance.get(`http://127.0.0.1:8000/api/manage/subscription-trips`)
}

export function AddSubscription(payload){
    return axiosInstance.post(`http://127.0.0.1:8000/api/manage/subscription-trips`, payload)
}


export function updateSub(payload){
    return axiosInstance.put(`http://127.0.0.1:8000/api/manage/subscription-trips/${payload.id}`, payload.data)
}

export function deleteSub(subId){
    return axiosInstance.delete(`http://127.0.0.1:8000/api/manage/subscription-trips/${subId}`)
}


export function getSub(subId){
    return axiosInstance.get(`http://127.0.0.1:8000/api/manage/subscription-trips/${subId}`)
}
