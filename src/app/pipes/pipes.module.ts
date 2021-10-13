import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDateTimePipePipe } from './local-date-time-pipe.pipe';



@NgModule({
  imports: [CommonModule],
  declarations: [LocalDateTimePipePipe],
  exports:[LocalDateTimePipePipe]
})
export class PipesModule { }
