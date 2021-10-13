import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NFERecord } from '../../interfaces/nferecord.Interface';



@Component({
  selector: 'state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  public nRecord: NFERecord
  public states: any

  date1: Date = new Date();
  invalidDates: Array<Date>
  es: any;
  
  constructor(private api: ApiService) { }

    ngOnInit(): void {
      this.es = {
        firstDayOfWeek: 1,
        dayNames: [ "domingo","segunda","terça","quarta","quinta","sexta","sábado" ],
        dayNamesShort: [ "dom","seg","ter","qua","qui","sex","sab" ],
        dayNamesMin: [ "D","S","T","Q","Q","S","S" ],
        monthNames: [ "janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro" ],
        monthNamesShort: [ "jan","fev","mar","abr","mai","jun","jul","ago","sep","out","nov","dez" ],
        today: 'Hoje',
        clear: 'Limpar'
    }

    let today = new Date();

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];
    
    this.api.getForDate(this.date1)
      .subscribe((response: any) => {
        this.nRecord = response;
        this.states = response.states
      },
      error => {
        alert("Erro ao carregar o registro")
      }
    )
  }

  loadRecord(){
    this.api.getForDate(this.date1)
      .subscribe((response: any) => {
        this.nRecord = response;
        this.states = response.states
        this.nRecord.date = this.date1
        console.log(this.nRecord);
        },
        error => {
          alert("Erro ao carregar o registro")
        }
      )
  }

  

}
