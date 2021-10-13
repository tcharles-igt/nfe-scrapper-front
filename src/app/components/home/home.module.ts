import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule
  ]
})
export class HomeModule { }
