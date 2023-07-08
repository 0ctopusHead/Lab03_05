import type { Passenger_Lists } from "@/list"
import { defineStore } from "pinia"
export const usePassengerStore = defineStore('passenger',{
    state: () => ({
        passenger: null as Passenger_Lists | null,
        airline : null as Passenger_Lists | null
    }),
    actions: {
        setPassenger(passenger: Passenger_Lists){
            this.passenger = passenger
        },
        setAirline(airline: Passenger_Lists){
            this.airline = airline
        }
    }
})