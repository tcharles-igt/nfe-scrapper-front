import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'states', loadChildren: () => import('./components/state/state.module').then(m => m.StateModule) },
  { path:'', pathMatch:'full', redirectTo:'/home'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
