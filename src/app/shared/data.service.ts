import {Injectable} from '@angular/core';
import {Product} from './list/list.model';

@Injectable()
export class DataService {

  public products: Array<Product>;

  getProducts(): Array<Product> {
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
        description: 'Ada',
      },
      {
        id: 4,
        description: 'IOTA',
      }
    ];
    return this.products;
  }

}
