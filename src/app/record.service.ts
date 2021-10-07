import { Injectable } from '@angular/core';
import { Record } from './record.Interface';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private nRecord: Record;
  constructor() { }

  setAnime(record: Record) {
    this.nRecord = record;
  }
  getRecord() {
    return this.nRecord;
  }

 
}
