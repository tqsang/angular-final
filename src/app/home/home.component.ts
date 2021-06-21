import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  onDirect() {
    this.router.navigate(['/product'], { relativeTo: this.route });
  }
}
