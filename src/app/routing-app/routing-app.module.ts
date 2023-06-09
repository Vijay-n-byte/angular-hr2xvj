import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { HomeComponent } from '../home/home.component';
import { HomedetailsComponent } from '../homedetails/homedetails.component';
import { InfoComponent } from '../info/info.component';
import { InfodetailsComponent } from '../infodetails/infodetails.component';
import { LoginComponent } from '../login/login.component';
import { MessageComponent } from '../message/message.component';
import { Mod1Component } from '../mod1/mod1.component';
import { Modcomp1Component } from '../mod1/modcomp1/modcomp1.component';
import { CartComponent } from '../payment/cart/cart.component';
import { UsersComponent } from '../payment/users/users.component';
import { SampleComponent } from '../sample/sample.component';

const routelements:Routes=[
  {path:'home' , component:HomeComponent,children:[{path:':id',component:HomedetailsComponent}]},
  {path:'login', component:LoginComponent,canActivate:[authGuard]},
  {path:'cart', component:CartComponent,
  canActivateChild:[authGuard],
  children:[
  {path:':id', component:UsersComponent}
  ]},
  {path:'message',component:MessageComponent,canDeactivate:[authGuard]},
  {path:'info',component:InfoComponent,children:[{path:':id',component:InfodetailsComponent}]},
  {path:'sample',component:SampleComponent},
  {path:'module',component:Mod1Component},
  {path:'**', redirectTo:'/home' ,pathMatch:'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routelements)
    
  ], 
  exports:[RouterModule],
  providers:[authGuard],
})
export class RoutingAppModule { }