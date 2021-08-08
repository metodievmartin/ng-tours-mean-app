import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitFirst'
})
export class SplitFirstPipe implements PipeTransform {

  transform(value: string, separator: string): string {
    let splits = value.split(separator);
      return splits.shift() || '';
  }
}
