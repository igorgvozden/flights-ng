import { Component, Input } from '@angular/core';
import { ProgressBarService } from 'src/app/api/services/progress-bar.service';
import { TicketService } from 'src/app/api/services/tickets.service';
import { UsersService } from 'src/app/api/services/users.service';
import { Flight } from 'src/app/shared/model/flight.model';
import { Ticket } from 'src/app/shared/model/ticket.model';
import { UserData } from 'src/app/shared/model/user-data.model';

@Component({
  selector: 'app-flight-overview',
  templateUrl: './flight-overview.component.html',
  styleUrls: ['./flight-overview.component.scss'],
})
export class FlightOverviewComponent {
  @Input() flight: Flight;
  @Input() activeUser: UserData;

  constructor(private ticketsService: TicketService, private usersService: UsersService, private progressBarService: ProgressBarService) {}

  showDetails: boolean = false;

  // btnClick(flight) {
  //   flight.extended = !flight.extended;
  //   console.log(flight);
  // }

  expandClick(flight) {
    flight.extended = !flight.extended;
  }

  bookFlight(flight, activeUser) {
    // this.progressBarService.setProgressBarStatus(true);

    this.ticketsService.reserveTicket(activeUser, flight).subscribe((res) => {  
      console.log('ovo je response na book flight', res);
    });

    this.usersService.getActiveUser();
    flight.extended = true;
  }

  buyTicket(ticket: Ticket) {
    this.ticketsService.buyTicket(ticket, this.activeUser);
  }

  isBooked(flight: Flight) {
    let booked = false;
    // ticket.status could be: 'booked' | 'paid'
    const ticket = this.activeUser?.tickets?.find(ticket => ticket.flight.flightNumber === flight.flightNumber);
    if (ticket) {
      booked = ticket.status === 'booked';
    }
    return booked;
  }

  isPurchased(flight: Flight) {
    const ticket = this.activeUser?.tickets?.find(ticket => ticket.flight.flightNumber === flight.flightNumber);
    if (ticket) {
      return ticket.status === 'paid';
    }
    return false;
  }
}
