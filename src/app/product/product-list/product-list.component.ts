import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Products[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProduct();
  }
}
