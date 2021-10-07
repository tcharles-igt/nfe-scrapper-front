import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record } from './record.Interface';
import { State } from './state.Interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:8080/records'
  uri: string
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Record>(this.url)
  }

  getForName(name: string) {
    this.uri = this.url+"/states/"+name
    return this.http.get<State>(this.uri)
  }

  getForDate(date: Date) {
        let dataF = date.getFullYear() + "-" + ((date.getMonth() + 1)) + "-" + ((date.getDate() )) ; 

    this.uri = this.url+"/"+dataF
    return this.http.get<Record>(this.uri)
  }

  getOutages() {
    this.uri = this.url+"/outages"
    return this.http.get<State>(this.uri)
  }
}
