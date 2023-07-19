import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() tabs = ['flights', 'airports', 'bookings', 'tickets', 'find-hotel'];

  btnClick(e: any) {
    console.log(e)
  }

  onToggleChange(e: any) {
    console.log(e)
  }
}
