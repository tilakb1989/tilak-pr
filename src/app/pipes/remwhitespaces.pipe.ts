import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remwhitespaces'
})
export class RemwhitespacesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = value.toString().trim(); 
    return result;
  }

}