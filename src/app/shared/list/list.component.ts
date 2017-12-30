import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() productList: Array<Product>;
  @Output() reverseList: EventEmitter<number> = new EventEmitter<number>();
  @Output() productsInitialList: EventEmitter<number> = new EventEmitter<number>();
  @Output() productsRemoveList: EventEmitter<number> = new EventEmitter<number>();

  emitLoadEvent() {
    this.productsInitialList.emit();
  }

  emitReverseEvent() {
    this.reverseList.emit();
  }

  emitRemoveEvent() {
    this.productsRemoveList.emit();
  }

}

