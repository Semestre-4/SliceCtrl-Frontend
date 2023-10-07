import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarData'
})
export class FormatarDataPipe implements PipeTransform {

  transform(dateTime: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateTime).toLocaleDateString(undefined, options);
  }

}
