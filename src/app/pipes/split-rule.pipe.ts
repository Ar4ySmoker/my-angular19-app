import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitRule',
  standalone: true,
})
export class SplitRulePipe implements PipeTransform {

  transform(value: string, type: string): any {
    if (!value || !type) return value;

    if (type === 'number') {
      return value.split(':')[0].trim();  
    } else if (type === 'text') {
      return value.split(':')[1]?.trim() || '';  
    }

    return value;
  }
}
