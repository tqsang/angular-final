import { EventEmitter, Injectable } from '@angular/core';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productSelected = new EventEmitter<Products>();
  private product: Products[] = [
    new Products(
      '1',
      'Mô Hình Súng Scar',
      '250.000',
      'assets/img/hinh1.jpg',
      '10'
    ),
    new Products(
      '2',
      'Mô Hình Kiếm Genji',
      '200.000',
      'assets/img/hinh2.jpg',
      '10'
    ),
    new Products(
      '3',
      'MG Wing GunDam Zero',
      '1.300.000',
      'assets/img/hinh3.jpg',
      '10'
    ),
    new Products(
      '4',
      'RG Evengelion Eva Unit',
      '1.100.000',
      'assets/img/hinh4.jpg',
      '10'
    ),
    new Products(
      '5',
      'RX Nu Gun Dam',
      '1.250.000',
      'assets/img/hinh5.jpg',
      '10'
    ),
  ];
  constructor() {}

  getProduct() {
    return this.product;
  }
  getProductIndex(index: number) {
    return this.product[index];
  }
  addProduct(product: Products) {
    this.product.push(product);
  }
  updateProduct(index: number, newProduct: Products) {
    this.product[index] = newProduct;
  }
  deleteProduct(index: number) {
    this.product.splice(index, 1);
  }
}
