import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'buttonTitle'
})
export class ButtonTitlePipe implements PipeTransform {
    transform(value: string) {
        const words = value.split('-');
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        return words.join(' ');
    }
}