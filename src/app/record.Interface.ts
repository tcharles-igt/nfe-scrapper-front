export interface Record {
    id: string
    date: Date
    states: States[]
}

export interface States {
    name: string
	outages: number
	services: Services[]
}

export interface Services {
    name: string
	status: string
}