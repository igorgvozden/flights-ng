import { NgModule } from '@angular/core';
import { TicketsComponent } from './tickets.component';
import { FlightsModule } from '../flights/flights.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  imports: [SharedModule, FlightsModule],
  declarations: [TicketsComponent, TicketComponent],
})
export class TicketsModule {}
