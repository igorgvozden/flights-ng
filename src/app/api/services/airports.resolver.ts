import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Airport } from 'src/app/shared/model/airport.model';
import { AirportsService } from './airports.service';
import { inject } from '@angular/core';

export const AirportsResolver: ResolveFn<Airport[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AirportsService).getAirports();
};
