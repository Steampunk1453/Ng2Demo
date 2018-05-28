import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DetailComponent} from './product/detail/detail.component';
import {ProductModule} from './product/product.module';
import {LoginModule} from './login/login.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {counterReducer} from "./shared/counter";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.provideStore({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
