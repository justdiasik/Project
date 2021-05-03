import { Component, OnInit, Input } from '@angular/core';
// import { items } from '../products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() item;
  // items = items;

  constructor() { }

  ngOnInit(): void {
  }

}
