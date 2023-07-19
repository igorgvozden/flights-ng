import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, forkJoin, map } from 'rxjs';
import { Flight } from 'src/app/shared/model/flight.model';
import { DATABASE_URL } from '../constants';

export interface RoundFlights {
  departureFlights: Flight[];
  returnFlights: Flight[];
}

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  constructor(private http: HttpClient) {}

  flights: RoundFlights = { departureFlights: [], returnFlights: [] };

  public flights$: BehaviorSubject<RoundFlights> = new BehaviorSubject(
    this.flights
  );

  getActiveFlightSearch(): BehaviorSubject<RoundFlights> {
    return this.flights$;
  }

  resetSearch() {
    this.flights.departureFlights.length = 0;
    this.flights.returnFlights.length = 0;
    this.flights$.next(this.flights);
  }

  getFlightsOnDate(date: string): void {
    this.http
      .get<Flight[]>(DATABASE_URL + '/flights?date=' + date)
      .subscribe((flights) => {
        this.flights.departureFlights = flights;
        this.flights.returnFlights.length = 0;

        this.flights$.next(this.flights);
      });
  }

  getFlightsOnDateAndDestination(date: string, destination: string): void {
    this.http
      .get<Flight[]>(
        `${DATABASE_URL}/flights?date=${date}&destination=${destination}`
      )
      .subscribe((flights) => {
        this.flights.departureFlights = flights;
        this.flights.returnFlights.length = 0;

        this.flights$.next(this.flights);
      });
  }

  getFlightsOnDateAndOrigin(date: string, origin: string): void {
    this.http
      .get<Flight[]>(`${DATABASE_URL}/flights?date=${date}&origin=${origin}`)
      .subscribe((flights) => {
        this.flights.departureFlights = flights;
        this.flights.returnFlights.length = 0;

        this.flights$.next(this.flights);
      });
  }

  getFlightsFromOriginToDestination(
    origin: string,
    destination: string,
    date: string
  ) {
    this.http
      .get<Flight[]>(`${DATABASE_URL}/flights?date=${date}&origin=${origin}`)
      .subscribe((flights) => {
        this.flights.departureFlights = flights.filter(
          (flight) => flight.destination.code === destination
        );
        this.flights.returnFlights.length = 0;

        this.flights$.next(this.flights);
      });
  }

  getRoundTrips(
    origin: string,
    destination: string,
    departureDate?: string,
    returnDate?: string
  ) {
    const o = this.http.get<Flight[]>(
      `${DATABASE_URL}/flights?date=${departureDate}&origin=${origin}`
    );

    const d = this.http.get<Flight[]>(
      `${DATABASE_URL}/flights?date=${returnDate}&origin=${destination}`
    );

    forkJoin([o, d]).subscribe(([resO, resD]) => {
      // flights from origin to destination
      const filteredOrigin = resO.filter(
        (flight) => flight.destination.code === destination
      );

      // flights from destination to origin
      const filteredDestination = resD.filter(
        (flight) => flight.destination.code === origin
      );

      console.log({
        departureFlights: filteredOrigin,
        returnFlights: filteredDestination,
      });
      this.flights.departureFlights = filteredOrigin;
      this.flights.returnFlights = filteredDestination;

      this.flights$.next(this.flights);
    });
  }
}
