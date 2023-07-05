import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios' 
import type { Passenger_Lists } from '@/list'

const apiClient : AxiosInstance = axios.create({
    baseURL: 'http://localhost:3004',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default({
    getPassenger(): Promise<AxiosResponse<Passenger_Lists[]>>{
        return apiClient.get<Passenger_Lists[]>('/passengers')
    }
})