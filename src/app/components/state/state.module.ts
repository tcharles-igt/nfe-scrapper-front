import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent} from './state.component';
import { StateRoutingModule } from './state.routing.module';
import {ToolbarModule} from 'primeng/toolbar';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { StateSearchComponent } from './state.search.component';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [StateComponent, StateSearchComponent],
  imports: [
    CommonModule,
    StateRoutingModule,
    ToolbarModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    PipesModule

  ]
})
export class StateModule { }
