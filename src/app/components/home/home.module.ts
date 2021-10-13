import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import {TableModule} from 'primeng/table';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule,
    PipesModule
  ]
})
export class HomeModule { }
