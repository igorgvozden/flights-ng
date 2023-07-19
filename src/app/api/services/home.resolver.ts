import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { AppService } from './app.service';
import { UserData } from 'src/app/shared/model/user-data.model';

export const HomeResolver: ResolveFn<UserData[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AppService).getUsers();
};
