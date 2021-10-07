import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any): string {
      let unixTime = new Date( value *1000)

    return ((unixTime.getDate() )) + "/" + ((unixTime.getMonth() + 1)) + "/" + unixTime.getFullYear();
  }

}
