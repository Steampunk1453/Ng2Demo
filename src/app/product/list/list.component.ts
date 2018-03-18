import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from './list.model';
import {DataService} from '../../shared/services/data.service';
import {ProductService} from '../shared/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public products: Array<Product>;
  public product: Product = {} as Product;
  public visibleForm: boolean = false;

  constructor(private _productService: ProductService,
              private _dataService: DataService,
              private _router: Router) {
  }

  reverseList() {
    this.products.reverse();
  }

  loadList() {
    this._dataService.get('/api/products').subscribe((data) => {
      if(data) {
        this.products = data;
        this.visibleForm = true;
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

  detailProduct() {
    let url: string = 'product/detail/'
    this._router.navigate([url + this.products[1].id]);
  }

  addProduct() {
    this._dataService.post('/api/product', this.product).subscribe((data) => {
      if(data) {
        this.loadList()
      }
    });
  }

  updateProduct() {
    this._dataService.put('/api/product/', this.product).subscribe((data) => {
      if(data) {
        this.loadList()
      }
    });
  }

  deleteProduct() {
    this._dataService.delete('/api/product/', this.product.id).subscribe((data) => {
      if(data) {
        this.loadList()
      }
    });
  }


}

