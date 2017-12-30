import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import {ProducerPipe} from './productor/productor.pipe';
import {DataService} from './data.service';

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
  providers: [DataService],
})
export class SharedModule { }
