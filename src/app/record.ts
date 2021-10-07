import { State } from "./state"

export class Record {
    public date:Date = new Date()

    public states: State[] = []

    constructor(date:Date,states: State[]){
        this.date = date
        this.states = states
    }
}
