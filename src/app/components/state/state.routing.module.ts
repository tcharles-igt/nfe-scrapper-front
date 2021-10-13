import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateComponent } from './state.component';
import { StateSearchComponent } from './state.search.component';

const routes: Routes = [
  { path: '', component: StateComponent },
  { path: ':name', component: StateSearchComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class StateRoutingModule { }