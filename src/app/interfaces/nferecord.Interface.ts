import { NFEState } from "./nfestate.interface";

export interface NFERecord {
    id: string
    date: Date
    states: NFEState[]
}