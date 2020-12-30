import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './tarea/tarea.component';
import { SumaComponent } from './suma/suma.component';
import { RestaComponent } from './resta/resta.component';

const tareaRoutes: Routes = [
  {
    path: '',
    component: TareaComponent,
    //canActivate: [AuthGuard],
    children: [      
          { path: 'suma', component: SumaComponent, data: {animation: 'SumaPage'}  },
          { path: 'resta', component: RestaComponent, data: {animation: 'RestaPage'}  }     
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(tareaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TareaRoutingModule { }
