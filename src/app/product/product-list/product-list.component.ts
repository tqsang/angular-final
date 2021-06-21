import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Products[];
  pageSlice: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProduct();
    this.pageSlice = this.products.slice(0, 8);
  }

  onChangePage(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.products.length) {
      endIndex = this.products.length;
    }
    this.pageSlice = this.products.slice(startIndex, endIndex);
  }
}
