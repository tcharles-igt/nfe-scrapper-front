import { Component, OnInit } from '@angular/core';
import { Record } from '../record.Interface';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { RecordService } from '../record.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nRecord: Record
  public states: any

  constructor(private api: ApiService, private recordService: RecordService, private router: Router) { }

  ngOnInit() {

    this.api.getData()
      .subscribe((response: any) => {
        this.nRecord = response;
        this.states = response.states
      },
      error => {
        alert("Erro ao carregar o registro")
      }
    )
    
  }

}
