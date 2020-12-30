import { Component, Input ,OnInit, EventEmitter, Output } from '@angular/core';
import { TareaService } from './../services/tarea.service';
import { slideInAnimation } from './../../animations';


@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  animations: [slideInAnimation],
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

}
