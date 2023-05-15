import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { CartComponent } from '../payment/cart/cart.component';
import { UsersComponent } from '../payment/users/users.component';

const routelements:Routes=[
  {path:'home' , component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'cart', component:CartComponent,children:[
  {path:':id', component:UsersComponent}
  ]},
  {path:'**', redirectTo:'/home' ,pathMatch:'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routelements)
    
  ], 
  exports:[RouterModule]
})
export class RoutingAppModule { }