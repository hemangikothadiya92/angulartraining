import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'substr',
})

export class SubstrPipe implements PipeTransform {
    transform(value: any) {
        if (value.length > 100) {
            return (value.substr(0, 100) + '...');
        } else {
            return value;
        }
    }
}