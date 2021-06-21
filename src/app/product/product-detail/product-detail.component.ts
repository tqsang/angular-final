import { ProductService } from './../product.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  id: string;
  category: any;
  productList: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.productList = this.productService.getProduct();
    this.product = this.productService.getProductIndex(this.id);
    this.category = this.productService.getCategory();
  }
  categoryList() {
    let findCategory = this.category.find((item) => item.id === this.id).name;
    let list = this.productList.filter(
      (item) => item.categoryId === findCategory
    );
    console.log(list);
    return list.slice(0, 5);
  }
  onShowDetail(id) {
    this.router.navigate([`/detail/${id}`], { relativeTo: this.route });
  }
}
