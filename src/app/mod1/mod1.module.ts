import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modcomp1Component } from './modcomp1/modcomp1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Modcomp1Component],
  exports:[Modcomp1Component],
})
export class Mod1Module { }