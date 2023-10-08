import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarData'
})
export class FormatarDataPipe implements PipeTransform {

  transform(dateTime: string): string {
    const dateFormatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const timeFormatOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
    
    const formattedDate = new Date(dateTime).toLocaleDateString(undefined, dateFormatOptions);
    const formattedTime = new Date(dateTime).toLocaleTimeString(undefined, timeFormatOptions);
    
    return `${formattedDate}, ${formattedTime}`;
  }

}
