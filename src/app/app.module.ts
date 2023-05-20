import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentModule } from './payment/payment.module';
import { RoutingAppModule } from './routing-app/routing-app.module';
import { MessageComponent } from './message/message.component';
import { serviceService } from './services/service.service';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { InfoComponent } from './info/info.component';
import { Sample1Service } from './services/sample1.service';
import { HttpClientModule } from '@angular/common/http';
import { InfodetailsComponent } from './infodetails/infodetails.component';
import { SampleComponent } from './sample/sample.component';
import { SamplechildComponent } from './sample/samplechild/samplechild.component';
import { Mod1Module } from './mod1/mod1.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    PaymentModule,
    RoutingAppModule,
    HttpClientModule,
    Mod1Module,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MessageComponent,
    HomedetailsComponent,
    InfoComponent,
    InfodetailsComponent,
    SampleComponent,
    SamplechildComponent
  ],
  bootstrap: [AppComponent],
  providers: [serviceService, Sample1Service],
})
export class AppModule {}
