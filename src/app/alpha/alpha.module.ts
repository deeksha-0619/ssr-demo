import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlphaRoutingModule } from './alpha-routing.module';
import { AlphaComponent } from './alpha.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AlphaComponent
  ],
  imports: [
    CommonModule,
    AlphaRoutingModule,
    MatCardModule
  ]
})
export class AlphaModule { }
