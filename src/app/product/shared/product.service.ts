import {EventEmitter, Injectable, Output} from '@angular/core';
import {Product} from '../list/list.model';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ProductService {

  public products: Array<Product>;

  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message)
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
