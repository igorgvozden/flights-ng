import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'basic' | 'raised' | 'flat' | 'stroked' | 'icon' | 'explore' =
    'raised';
  @Input() disabled: boolean = false;
  @Input() isSubmitBtn: boolean = false;
  // @Input() form: string;

  @Output() btnClick = new EventEmitter<any>();

  BUTTON_TYPE = ButtonType;

  // emitClick(e: string) {
  //   this.btnClick.emit(e);
  // }
}

export enum ButtonType {
  BASIC = 'basic',
  RAISED = 'raised',
  FLAT = 'flat',
  STROKED = 'stroked',
  ICON = 'icon',
  EXPLORE = 'explore',
}
