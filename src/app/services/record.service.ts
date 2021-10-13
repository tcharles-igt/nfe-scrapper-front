import { Injectable } from '@angular/core';
import { NFERecord } from '../interfaces/nferecord.Interface';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private nRecord: NFERecord;
  constructor() { }

  setAnime(record: NFERecord) {
    this.nRecord = record;
  }
  getRecord() {
    return this.nRecord;
  }

 
}
