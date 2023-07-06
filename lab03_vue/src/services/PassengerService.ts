import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { Passenger_Lists } from '@/list'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/se331-2022/passengerdb',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvent(perPage: number, page: number): Promise<AxiosResponse<Passenger_Lists[]>> {
    return apiClient.get<Passenger_Lists[]>('/passenger?_page=' + page + '&_limit=' + perPage)
  },
  getEventById(id: number): Promise<AxiosResponse<Passenger_Lists>> {
    return apiClient.get<Passenger_Lists>('passenger/' + id.toString())
  },
  getAirlineById(id: number): Promise<AxiosResponse<Passenger_Lists>> {
    return apiClient.get<Passenger_Lists>('airline/' + id.toString())
  }
}