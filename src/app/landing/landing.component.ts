import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './../animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  animations: [slideInAnimation],
  // attach the fade in animation to the host (root) element of this component  
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
