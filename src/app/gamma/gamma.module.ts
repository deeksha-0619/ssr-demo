import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GammaRoutingModule } from './gamma-routing.module';
import { GammaComponent } from './gamma.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    GammaComponent
  ],
  imports: [
    CommonModule,
    GammaRoutingModule,
    MatCardModule
  ]
})
export class GammaModule { }
