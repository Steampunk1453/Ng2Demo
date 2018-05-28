import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ProductComponent} from './product.component';
import {ProductRoutingModule} from './product-routing.module';
import {NgModule} from '@angular/core';
import {ProductService} from "./shared/product.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent
  ],
  exports:[
    ProductComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
