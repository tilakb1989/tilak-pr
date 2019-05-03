import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remunderscore'
})
export class RemunderscorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = value.replace(/_/g, " ");
    return result;
  }

}
