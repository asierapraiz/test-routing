import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public id=1;
  constructor() { }

  ngOnInit(): void {
  }

  reset(){

  }

}
