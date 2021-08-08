import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitFirst'
})
export class SplitFirstPipe implements PipeTransform {

  transform(value: string, separator: string): string {
    let splits = value.split(separator);
    if (splits.length > 1) {
      return splits.shift() || '';
    } else {
      return '';
    }
  }

}
