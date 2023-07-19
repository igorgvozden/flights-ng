import { NgModule } from '@angular/core';
import { AirportsComponent } from './airports/airports.component';
// import { FlightsComponent } from './flights/flights.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FindHotelComponent } from './find-hotel/find-hotel.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { FlightsModule } from './flights/flights.module';
// import { SearchFlightsComponent } from './flights/search-flights/search-flights.component';
// import { FlightsTableComponent } from './flights/flights-table/flights-table.component';
// import { FlightCardComponent } from './flights/flight-card/flight-card.component';

@NgModule({
  declarations: [
    AirportsComponent,
    // FlightsComponent,
    TicketsComponent,
    BookingsComponent,
    FindHotelComponent,
    // SearchFlightsComponent,
    // FlightsTableComponent,
    // FlightCardComponent,
  ],
  imports: [SharedModule, HomeModule, FlightsModule],
  exports: [
    AirportsComponent,
    // FlightsComponent,
    TicketsComponent,
    BookingsComponent,
  ],
})
export class ComponentsModule {}
