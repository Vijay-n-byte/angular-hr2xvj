import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Modcomp1Component } from './modcomp1/modcomp1.component';
import { RoutingAppModule } from '../routing-app/routing-app.module';
import { Mod1Component } from './mod1.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingAppModule,
  ],
  declarations: [Mod1Component],
  exports:[Mod1Component],
})
export class Mod1Module { }