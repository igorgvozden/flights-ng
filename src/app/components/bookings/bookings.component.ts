import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent {
  title: string = 'bookings';
  heroSrc: string = '../../../../assets/images/hero-bookings.png';
}
