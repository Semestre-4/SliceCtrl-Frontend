import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarPreco'
})
export class FormatarPrecoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
