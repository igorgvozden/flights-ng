import { Aircraft } from './aircraft.model';
import { Airport } from './airport.model';
import { FlightDuration } from './flight-duration.model';

export interface Flight {
  flightNumber: string;
  aircraft: Aircraft;
  origin: Airport;
  destination: Airport;
  distance: number;
  duration: FlightDuration;
  departureTime: string;
  arrivalTime: string;
  extended?: boolean;
}
