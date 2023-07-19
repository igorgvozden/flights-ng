import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { UserData } from 'src/app/shared/model/user-data.model';
import { inject } from '@angular/core';
import { UsersService } from '../services/users.service';

export const UsersResolver: ResolveFn<UserData | null> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(UsersService).getActiveUser();
};
