import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Testing1Component } from './testing1/testing1.component';

const routes: Routes = [
  {
    path:'',
    component:Testing1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
