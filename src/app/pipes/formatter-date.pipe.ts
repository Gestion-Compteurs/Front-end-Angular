import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'formatterDate',
  standalone: true
})
export class FormatterDatePipe implements PipeTransform {
  transform(value: Date): any {
    if (value) {
      const datePipe = new DatePipe('en');
      return datePipe.transform(value, 'yyyy-MM-dd');
    }
    return null;
  }
}
