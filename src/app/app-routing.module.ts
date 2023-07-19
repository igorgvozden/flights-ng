import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './components/flights/flights.component';
import { AirportsComponent } from './components/airports/airports.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { FindHotelComponent } from './components/find-hotel/find-hotel.component';
import { HomeComponent } from './components/home/home.component';
import { AirportsResolver } from './api/services/airports.resolver';
import { HomeResolver } from './api/services/home.resolver';
import { UsersResolver } from './api/resolvers/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { users: HomeResolver, airports: AirportsResolver },
    children: [
      {
        path: 'flights',
        component: FlightsComponent,
      },
      {
        path: 'airports',
        component: AirportsComponent,
        resolve: { airports: AirportsResolver },
      },
      {
        path: 'bookings',
        component: BookingsComponent,
        resolve: { activeUser: UsersResolver },
      },
      {
        path: 'tickets',
        component: TicketsComponent,
        resolve: { activeUser: UsersResolver },
      },
      {
        path: 'find-hotel',
        component: FindHotelComponent,
      },
      {
        path: '',
        redirectTo: '/flights',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: FlightsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
