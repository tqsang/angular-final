import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  id: string;
  editMode = false;
  productForm: FormGroup;
  categories: Category[];
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
    this.categories = this.productService.getCategory();
  }
  onSubmit() {
    if (this.editMode) {
      this.productService.updateProduct(this.id, this.productForm.value);
    } else {
      this.productService.addProduct(this.productForm.value);
    }
    console.log(this.productForm.value);
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let name = '';
    let price = '';
    let quantity = '';
    let description = '';
    let categoryId = '';

    if (this.editMode) {
      const product = this.productService.getProductIndex(this.id);
      name = product.name;
      price = product.price;
      quantity = product.quantity;
      description = product.description;
      categoryId = product.categoryId;
    }

    this.productForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      price: new FormControl(price, Validators.required),
      quantity: new FormControl(quantity, Validators.required),
      description: new FormControl(description, Validators.required),
      categoryId: new FormControl(categoryId, Validators.required),
    });
  }
}
