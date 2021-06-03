import { Router, ActivatedRoute } from '@angular/router';
import { Products } from './../models/products.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productSelected: Products;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService.productSelected.subscribe((product: Products) => {
      this.productSelected = product;
    });
  }

  onDirect() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
