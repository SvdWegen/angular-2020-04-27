import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'camelcase' })
export class CamelCasePipe implements PipeTransform {
    transform(value: string) {
        let words = value.split(' ');

        let output = '';
        for(let word of words) {
            output += word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        
        output = output[0].toLowerCase() + output.slice(1);
        return output;
    }
}