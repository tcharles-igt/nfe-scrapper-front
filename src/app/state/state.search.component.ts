import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../state.Interface';
import { ApiService } from '../api.service';

@Component({
    selector: 'state-search',
    templateUrl: './state.search.component.html',
    styleUrls: ['./state.component.css']
  })
  export class StateSearchComponent implements OnInit {
    name: string
    private sub: any
    public state: State
    public states: State[] = []

    constructor(private route: ActivatedRoute,private api: ApiService, private router: Router) { 
      this.route.params.subscribe(params => {
        this.name = params['name'];
        this.states = []
        this.api.getForName(this.name)
          .subscribe((response: any) => {
            this.state = response;
            this.states.push(this.state)
          },
          error => {
            alert("Erro ao carregar o registro")
          }
        )

    });
     }
  
      ngOnInit() { }
  
  }
  