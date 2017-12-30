import {Component} from '@angular/core';
import { Product } from './shared/list/list.model';
import {DataService} from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public products: Array<Product>;

  constructor(private _dataService: DataService) {
  }

  reverseList() {
    this.products.reverse();
  }

  loadList() {
    this.products = this._dataService.getProducts();
  }

  removeList() {
   this._dataService.removeProducts();
  }

}


