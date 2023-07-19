import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  @Output() clickEmitter = new EventEmitter<any>();
  constructor() {}

  navButtonClicked = (value) => {
    this.clickEmitter.emit(value);
  };
}
