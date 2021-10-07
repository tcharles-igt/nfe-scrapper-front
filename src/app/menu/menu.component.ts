import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng-lts/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink: 'home'
        },

        {
            label: 'Estados',
            icon: 'pi pi-fw pi-filter',
            items:[
              {
                label:'AM',
                icon:'pi pi-fw pi-chevron-circle-right',
                routerLink: 'states/am'
              },
              {
                label:'BA',
                icon:'pi pi-fw pi-chevron-circle-right',
                routerLink: 'states/ba'
              },
              {
                label:'CE',
                icon:'pi pi-fw pi-chevron-circle-right',
                routerLink: 'states/ce'
              },
              {
                label:'MG',
                icon:'pi pi-fw pi-chevron-circle-right',
                routerLink: 'states/mg'
              },
              {
                label:'MS',
                icon:'pi pi-fw pi-chevron-circle-right',
                routerLink: 'states/ms'
              },
              {
                label:'PE',
                icon:'pi pi-fw pi-chevron-circle-right',
                routerLink: 'states/pe'
              },
              {
                label:'PR',
                icon:'pi pi-fw pi-chevron-circle-right',
                routerLink: 'states/pr'
              },
              {
                label:'RS',
                icon:'pi pi-fw pi-chevron-circle-right',
                routerLink: 'states/rs'
              },
              {
                label:'SP',
                icon:'pi pi-fw pi-chevron-circle-right',
                routerLink: 'states/sp'
              }
            ]

        },
        {
          label: 'Data',
          icon: 'pi pi-fw pi-calendar',
          routerLink: 'states'
        }
      ]
  }

}
