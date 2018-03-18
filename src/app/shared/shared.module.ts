import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ListComponent } from '../product/list/list.component';
import {ProducerPipe} from './product.pipe';
import {ProductService} from '../product/shared/product.service';
import {DataService} from './services/data.service';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    ProducerPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    ListComponent,
    ProducerPipe,
    CommonModule,
    FormsModule
  ],
  providers: [ProductService, DataService, AuthService],
})
export class SharedModule { }
