import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from 'src/app/shared/model/flight.model';
import { DATABASE_URL } from '../constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from 'src/app/shared/model/user-data.model';
import { Ticket } from 'src/app/shared/model/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  bookedFlights: Flight[] = [];
  public $bookedFlights: BehaviorSubject<Flight[]> = new BehaviorSubject<
    Flight[]
  >(this.bookedFlights);

  constructor(private http: HttpClient) {}

  bookFlight(flight: Flight, user: UserData): Observable<any> {
    console.log(flight, JSON.stringify(flight));
    delete flight.extended;

    const url = `${DATABASE_URL}/users/${user.id}/booking`;
    return this.http.post<Flight>(url, flight);
  }

  getAllBooked(user: UserData): Observable<Flight[]> {
    const url = `${DATABASE_URL}/users/${user.id}/booking`;
    return this.http.get<Flight[]>(url);
  }

  discardBooking(booking: Flight, user: UserData) {
    const url = `${DATABASE_URL}/users/${user.id}/booking/${booking.flightNumber}`;
    return this.http.delete<Flight>(url);
  }

  discardTicket(ticket: Ticket, user: UserData) {
    const url = `${DATABASE_URL}/users/${user.id}/tickets/${ticket.id}`;
    return this.http.delete(url);
  }

  buyTicket(ticket: Ticket, user: UserData) {
    const url = `${DATABASE_URL}/users/${user.id}/tickets/${ticket.id}`;
    return this.http.get(url);
  }

  reserveTicket(user: UserData, flight: Flight) {
    const url = `${DATABASE_URL}/users/${user.id}/tickets`;

    const ticket: Ticket = {
      price: (flight.distance * 0.12).toFixed(2).toString(),
      currency: 'usd',
      status: 'booked',
      booked: true,
      purchased: false,
      expired:
        new Date(flight.departureTime).getTime() === new Date().getTime(),
      flight,
    };
    console.log(ticket, JSON.stringify(ticket));

    return this.http.post(url, ticket);
  }
}
