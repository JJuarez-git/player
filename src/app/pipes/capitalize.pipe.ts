import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): unknown {
    let result = value.charAt(0).toUpperCase() + value.substring(1);
    
    return result;
  }

}
