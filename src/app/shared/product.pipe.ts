import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'producer'})
export class ProducerPipe implements PipeTransform {
  transform(value: number): string {
    return 'Product: ' + value.toString();
  }
}
