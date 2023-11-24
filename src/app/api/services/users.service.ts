import { Injectable } from '@angular/core';
import { UserData } from 'src/app/shared/model/user-data.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DATABASE_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // tebjau mi http metode za serve

  constructor(private http: HttpClient) {}

  // treba mi neki user state
  private activeUser: UserData | null = null;
  public activeUser$: BehaviorSubject<UserData | null> =
    new BehaviorSubject<UserData | null>(this.activeUser);

  setActiveUser = (user: UserData): void => {
    this.activeUser = user;
    this.activeUser$.next(this.activeUser);
    console.log('Active user set: ', this.activeUser, user);
  };

  getActiveUser = (): BehaviorSubject<UserData | null> => {
    if (this.activeUser) {
      this.http
        .get(`${DATABASE_URL}/users/${this.activeUser.id}`)
        .subscribe((dbUser) => {
          this.activeUser = dbUser as UserData;

          this.activeUser$.next(this.activeUser);
        });
    }
    return this.activeUser$;
  };
}
