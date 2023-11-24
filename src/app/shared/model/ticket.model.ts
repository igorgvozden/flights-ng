import { Flight } from "./flight.model";

export interface Ticket {
    id?: string;
    price: string;
    currency: string;
    status: string;
    booked: boolean;
    purchased: boolean;
    expired: boolean;
    flight: Flight;
  }