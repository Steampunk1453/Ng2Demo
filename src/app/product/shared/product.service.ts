import {EventEmitter, Injectable, Output} from '@angular/core';
import {Product} from '../list/list.model';

@Injectable()
export class ProductService {

  public products: Array<Product>;

  isVisible = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isVisible = !this.isVisible;
    this.change.emit(this.isVisible);
  }

  loadProducts(): Array<Product> {
    this.products = [
      {
        id: 1,
        description: 'Bitcoin',
      },
      {
        id: 2,
        description: 'Ether',
      },
      {
        id: 3,
        description: 'ADA',
      },
      {
        id: 4,
        description: 'IOTA',
      }
    ];
    return this.products;
  }

}
