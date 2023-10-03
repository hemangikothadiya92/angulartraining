import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'multiply',
})

export class MultiplyPipe implements PipeTransform {
    transform(value: any, arg: any) {
        return value * arg;
    }
}