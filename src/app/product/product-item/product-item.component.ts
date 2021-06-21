import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  onShowDetail(id) {
    this.router.navigate([`/detail/${id}`], { relativeTo: this.route });
  }
}
