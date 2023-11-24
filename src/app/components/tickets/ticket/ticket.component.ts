import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/shared/model/ticket.model';
import { UserData } from 'src/app/shared/model/user-data.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  @Input() ticket: Ticket;
  @Input() activeUser: UserData;
}
