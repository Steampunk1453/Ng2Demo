import {Injectable} from '@angular/core';
import {Product} from '../../list/list.model';

@Injectable()
export class ProductService {

  public products: Array<Product>;

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
