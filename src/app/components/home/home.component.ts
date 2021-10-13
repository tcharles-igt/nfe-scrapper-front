import { Component, OnInit } from '@angular/core';
import { NFERecord } from '../../interfaces/nferecord.Interface';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nRecord: NFERecord
  public states: any
  public date:Date = new Date()

  constructor(private api: ApiService, private recordService: RecordService, private router: Router) { }

  ngOnInit() {

    this.api.getData()
      .subscribe((response: any) => {
        this.nRecord = response
        this.states = response.states
        this.date = new Date(this.nRecord.date)
      },
      error => {
        alert("Erro ao carregar o registro")
      }
    )
    
  }

}
