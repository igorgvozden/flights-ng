import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTimeISO',
})
export class GetTimeISO implements PipeTransform {
  transform(value: string, ampm: boolean = false) {
    let hours: number | string = new Date(value).getHours();
    let minutes: number | string = new Date(value).getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (ampm) {
      return formatAMPM(value);
    }
    return `${hours}:${minutes}`;
  }
}

function formatAMPM(date) {
  let hours: number | string = new Date(date).getHours();
  let minutes: number | string = new Date(date).getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
