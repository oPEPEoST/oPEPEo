import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component'
const routes: Routes = [
  {path: '',redirectTo:'/home', pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
];

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forRoot(routes)   
  ],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
