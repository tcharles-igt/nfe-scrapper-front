import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NFERecord } from '../interfaces/nferecord.Interface';
import { NFEState } from '../interfaces/nfestate.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:8080/records'
  uri: string
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<NFERecord>(this.url)
  }

  getForName(name: string) {
    this.uri = this.url+"/states/"+name
    return this.http.get<NFEState>(this.uri)
  }

  getForDate(date: Date) {
        let dataF = date.getFullYear() + "-" + ((date.getMonth() + 1)) + "-" + ((date.getDate() )) ; 

    this.uri = this.url+"/"+dataF
    return this.http.get<NFERecord>(this.uri)
  }

  getOutages() {
    this.uri = this.url+"/outages"
    return this.http.get<NFEState>(this.uri)
  }
}
