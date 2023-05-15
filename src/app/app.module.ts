import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentModule } from './payment/payment.module';
import { RoutingAppModule } from './routing-app/routing-app.module';





@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    PaymentModule,
    RoutingAppModule

  ],
  declarations: [AppComponent,HomeComponent,LoginComponent],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }

