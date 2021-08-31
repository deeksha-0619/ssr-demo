import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetaRoutingModule } from './beta-routing.module';
import { BetaComponent } from './beta.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    BetaComponent
  ],
  imports: [
    CommonModule,
    BetaRoutingModule,
    MatCardModule
  ]
})
export class BetaModule { }
