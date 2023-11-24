import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/api/services/tickets.service';
import { UsersService } from 'src/app/api/services/users.service';
import { DescendAnimation } from 'src/app/shared/animations';
import { Flight } from 'src/app/shared/model/flight.model';
import { Ticket } from 'src/app/shared/model/ticket.model';
import { UserData } from 'src/app/shared/model/user-data.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
  animations: [DescendAnimation],
})
export class BookingsComponent implements OnInit {
  title: string = 'bookings';
  heroSrc: string = '../../../../assets/images/hero-bookings.png';

  activeUser;
  activeBookings: Ticket[] = [];
  expiredBookings: Ticket[] = [];

  constructor(
    private usersService: UsersService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    // this.usersService.getActiveUser().subscribe((user) => {
    //   if (user && user.tickets) {
    //     this.activeUser = user;
    //     this.activeBookings = user.tickets.filter((ticket) => ticket.booked);
    //   }
    // });

    this.usersService.activeUser$.subscribe((user) => {
      this.activeUser = user;
      if (user && user.tickets) {
        this.activeBookings = user.tickets.filter((ticket) => ticket.booked);
        this.filterExpiredBookings();
      }
    });
  }

  discardBooking(booking: Ticket) {
    this.ticketService
      .discardTicket(booking, this.activeUser)
      .subscribe(() => this.usersService.getActiveUser());
  }

  buyTicket(booking: Ticket) {
    this.ticketService.buyTicket(booking, this.activeUser).subscribe((res) => {
      console.log('buy res: ', res);
      this.activeUser = this.usersService.getActiveUser();
    });
  }

  filterExpiredBookings() {
    this.activeBookings.forEach((booking: Ticket) => {
      const ticketDate = new Date(booking.flight.departureTime);
      if (ticketDate.setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)) {
        booking.expired = true;
      }
    });
  }
}
