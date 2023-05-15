import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { CartComponent } from '../payment/cart/cart.component';

const routelements:Routes=[
  {path:'home' , component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'cart', component:CartComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routelements)
    
  ], 
  exports:[RouterModule]
})
export class RoutingAppModule { }