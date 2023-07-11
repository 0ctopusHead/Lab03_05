import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { Passenger_Lists } from '@/list'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvent(perPage: number, page: number): Promise<AxiosResponse<Passenger_Lists[]>> {
    return apiClient.get<Passenger_Lists[]>('/passengers?_page=' + page + '&_limit=' + perPage)
  },
  getEventById(id: number): Promise<AxiosResponse<Passenger_Lists>> {
    return apiClient.get<Passenger_Lists>('passengers/' + id.toString())
  },
  getAirlineById(id: number): Promise<AxiosResponse<Passenger_Lists>> {
    return apiClient.get<Passenger_Lists>('airlines/' + id.toString())
  }
}