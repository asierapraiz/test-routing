import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea/tarea.component';
import { SumaComponent } from './suma/suma.component';
import { RestaComponent } from './resta/resta.component';
import { TareaRoutingModule } from './tarea-routing.module';




@NgModule({
  declarations: [TareaComponent, SumaComponent, RestaComponent],
  imports: [
    CommonModule,
    TareaRoutingModule
  ]
})
export class TareaModule { }
