import { User } from './user.model';
import { Ticket } from './ticket.model';
import { Flight } from './flight.model';

export interface UserData {
  id: string;
  user: User;
  bookings?: Flight[];
  tickets?: Ticket[];
}
