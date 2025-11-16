import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {
transform(value: unknown): string {
    if (value === 'M' || value === 'm') {
      return 'Male';
    } else if (value === 'F' || value === 'f') {
      return 'Female';
    } else {
      return 'Others';
    }
  }

}