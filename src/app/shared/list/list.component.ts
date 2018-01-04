import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() productList: Array<Product>;
  @Output() reverseList: EventEmitter<void> = new EventEmitter<void>();
  @Output() orderByFieldAsc: EventEmitter<string> = new EventEmitter<string>();

  emitReverseEvent() {
    this.reverseList.emit();
  }

  orderAscByField(field: string){
    this.orderByFieldAsc.emit(field);
  }

}

