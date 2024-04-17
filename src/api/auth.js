import axiosInstance from '@/axiosInstance/axios'

export function log(){
    return axiosInstance.get("admin/auth/google")
}

