import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tamanhoPizza'
})
export class TamanhoPizzaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
