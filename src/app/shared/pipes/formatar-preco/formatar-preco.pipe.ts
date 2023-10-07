import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarPreco'
})
export class FormatarPrecoPipe implements PipeTransform {

  transform(value: number, currencySymbol: string = 'R$', decimalPlaces: number = 2): string {
    return `${currencySymbol} ${value.toFixed(decimalPlaces)}`;
  }

}
