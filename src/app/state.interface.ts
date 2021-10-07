export interface State {
    name: string
	outages: number
	services: Services[]
}

export interface Services {
    name: string
	status: string
}