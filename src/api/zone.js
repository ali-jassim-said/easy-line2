import axiosInstance from "@/axiosInstance/axios";

export function zones(){
    return axiosInstance.get('http://127.0.0.1:8000/api/manage/zones')
}


export function addZone(payload){
    return axiosInstance.post('http://127.0.0.1:8000/api/manage/zones', payload)
}


export function update(payload){
    return axiosInstance.put(`http://127.0.0.1:8000/api/manage/zones/${payload.id}`, payload.data)
}

export function deleteZone(zoneId){
    return axiosInstance.delete(`http://127.0.0.1:8000/api/manage/zones/${zoneId}`)
}


export function getZone(zoneId){
    return axiosInstance.get(`http://127.0.0.1:8000/api/manage/zones/${zoneId}`)
}