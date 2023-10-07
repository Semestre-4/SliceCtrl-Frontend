import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tamanhoPizza'
})
export class TamanhoPizzaPipe implements PipeTransform {

  transform(size: string): string {
    switch (size) {
      case 'P':
        return 'Pequena';
      case 'M':
        return 'Média';
      case 'G':
        return 'Grande';
      case 'XG':
        return 'Gigante';
      default:
        return 'Tamanho inválido';
    }
  }

}
