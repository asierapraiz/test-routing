import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './../../animations';
import { TareaService } from './../services/tarea.service';
import { RouterOutlet , Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  animations: [slideInAnimation],
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  constructor(private ts: TareaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {  
    
    this.router.navigate(['../suma'], { relativeTo: this.route });
    
  }

}
