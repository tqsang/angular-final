import { ProductService } from './../product.service';
import { Products } from './../../models/products.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Products;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
