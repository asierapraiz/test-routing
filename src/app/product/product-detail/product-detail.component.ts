import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() productId!: number;  
  sub!: string;
  constructor(
    private _Activatedroute:ActivatedRoute,
    private _router:Router) { }

  ngOnInit(): void {}
      
  reinit(){}  

}
