import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarData'
})
export class FormatarDataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
