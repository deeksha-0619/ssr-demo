import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeltaRoutingModule } from './delta-routing.module';
import { DeltaComponent } from './delta.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DeltaComponent
  ],
  imports: [
    CommonModule,
    DeltaRoutingModule,
    MatCardModule
  ]
})
export class DeltaModule { }
