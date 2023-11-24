import { NgModule } from '@angular/core';
import { FlightsComponent } from './flights.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { FlightsTableComponent } from './flights-table/flights-table.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlightOverviewComponent } from './flights-table/flight-overview/flight-overview.component';

@NgModule({
  declarations: [
    FlightsComponent,
    SearchFlightsComponent,
    FlightsTableComponent,
    FlightCardComponent,
    FlightOverviewComponent,
  ],
  imports: [SharedModule],
  exports: [
    FlightsComponent,
    SearchFlightsComponent,
    FlightsTableComponent,
    FlightCardComponent,
    FlightOverviewComponent
  ],
})
export class FlightsModule {}
