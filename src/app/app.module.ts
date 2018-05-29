import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './shared/services/data.service';
import { DetailComponent } from './product/detail/detail.component';
import {ProductModule} from './product/product.module';
import {LoginModule} from './login/login.module';

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
    LoginModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
