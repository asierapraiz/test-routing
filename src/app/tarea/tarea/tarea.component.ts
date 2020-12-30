import { Component, OnInit } from '@angular/core';
import { TareaService } from './../services/tarea.service';
import { Subscription }   from 'rxjs';
import { slideInAnimation } from './../../animations';
import { RouterOutlet } from '@angular/router';






@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  animations: [slideInAnimation],
  // attach the fade in animation to the host (root) element of this component  
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  subscription!: Subscription;
  errores: number = 0;
  intentos: number = 1;
  showComponent: boolean=true;
  
  constructor(private ts: TareaService) { }

  ngOnInit(): void {
    this.subscription = this.ts.addItemToBasket$.subscribe(
      errores => {
        this.errores=errores;
        if(this.errores == 3){          
          console.log("ya es tres");
          //this.ts.reset();
          this.errores=0;
          this.intentos++;
          this.showComponent=false;
          setTimeout(()=>this.showComponent=true);
        }
      });      
      
  }  

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


}
