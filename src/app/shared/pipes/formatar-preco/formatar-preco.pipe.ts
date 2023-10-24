import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarPreco'
})
export class FormatarPrecoPipe implements PipeTransform {

  transform(value: number, currencySymbol: string = 'R$', decimalPlaces: number = 2): string {

    let temp = 0;
    if (value != null)
      temp = value;
    
    return `${currencySymbol} ${value.toFixed(decimalPlaces)}`;
  }

}
