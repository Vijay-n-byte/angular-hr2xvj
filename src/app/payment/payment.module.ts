import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {RoutingAppModule} from '../routing-app/routing-app.module'
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [CommonModule,RoutingAppModule],
  declarations: [CartComponent,UsersComponent],
  exports: [CartComponent,UsersComponent],
})
export class PaymentModule {

  




}
