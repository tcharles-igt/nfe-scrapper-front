import { NFEService } from "./nfeservice.interface";

export interface NFEState {
    name: string
	outages: number
	services: NFEService[]
}