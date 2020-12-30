import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {

  @Input() productId!: number; 
  constructor() { }

  ngOnInit(): void {
  }

}
