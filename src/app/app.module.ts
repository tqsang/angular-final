import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './home/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DemoMaterialModule } from './models/meterial.model';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BannerComponent,

    ProductComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductItemComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    DemoMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
