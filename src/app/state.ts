import { Service } from "./service"

export class State {
    public name:string
    public outages:number

    public services: Service[] = []

    constructor(name:string,outages:number,services: Service[]){
        this.name = name
        this.outages = outages
        this.services = services
    }
}
