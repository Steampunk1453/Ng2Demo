import {Component} from '@angular/core';
import { Product } from './product/list/list.model';
import {ProductService} from './product/shared/product.service';
import {DataService} from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public headerTitle = 'Welcome to the Cryptocurrencies Shop!';

  public products: Array<Product>;

  constructor(private _productService: ProductService,
              private _dataService: DataService) {
  }

  reverseList() {
    this.products.reverse();
  }

  loadList() {
    this._dataService.get('/api/products').subscribe((data) => {
      if(data) {
        this.products = data;
      }
    });
  }

  orderData(field: string) {
    if (this.products) {
      this.products = this.products.sort(function(a, b) {
        if(a[field] < b[field]) return -1;
        if(a[field] > b[field]) return 1;
        return 0;
      });
    }
  }

}


