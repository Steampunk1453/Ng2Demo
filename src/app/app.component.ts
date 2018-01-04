import {Component} from '@angular/core';
import { Product } from './shared/list/list.model';
import {DataService} from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public headerTitle = 'Welcome to the Cryptocurrencies Shop!';

  public products: Array<Product>;

  constructor(private _dataService: DataService) {
  }

  reverseList() {
    this.products.reverse();
  }

  loadList() {
    this.products = this._dataService.getProducts();
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


