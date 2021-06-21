import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Products } from './../models/products.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productSelected: Products;
  products: Products[];
  pageSlice: any;
  id: number;
  term;

  startIndex: number = 0;
  endIndex: number = 10;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.productService.productSelected.subscribe((product: Products) => {
      this.productSelected = product;
    });
    this.products = this.productService.getProduct();
  }

  pagination() {
    let tem = this.products.reverse();
    return tem.slice(this.startIndex, this.endIndex);
  }

  onChangePage(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.products.length) {
      endIndex = this.products.length;
    }

    this.startIndex = startIndex;
    this.endIndex = endIndex;
  }
  onAdd() {
    this.router.navigate([`new`], { relativeTo: this.route });
  }
  onEdit(id) {
    this.router.navigate([`${id}/edit`], { relativeTo: this.route });
  }
  onDelete(id) {
    this.productService.deleteProduct(id);
    this.pageSlice = this.products.slice(0, 10);
  }
}
