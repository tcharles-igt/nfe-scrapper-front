import { Component, OnInit } from '@angular/core';
import { State } from '../state.Interface';
import { ApiService } from '../api.service';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'outages',
  templateUrl: './outages.component.html',
  styleUrls: ['./outages.component.css']
})
export class OutagesComponent implements OnInit {

  public state: State
  public msgs: Message[];

  constructor(
    private api: ApiService,
    private primengConfig: PrimeNGConfig
    ) { }

  ngOnInit(): void {
    this.api.getOutages()
      .subscribe((response: any) => {
        this.state = response;

        this.msgs = [
          {
            severity:'info', 
            summary:'Info', 
            detail:'A região com maior indisponibilidade é a '+this.state.name+ ' com '+this.state.outages+' falhas até o momento.'
          }
        ]
        this.primengConfig.ripple = true;

      },
      error => {
        alert("Erro ao carregar o registro")
      }
    )

  }

}
