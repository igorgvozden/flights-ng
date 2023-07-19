import { Injectable } from '@angular/core';
import { UserData } from 'src/app/shared/model/user-data.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // tebjau mi http metode za serve

  // treba mi neki user state, koji ce da se cuva u servicu? ili u app?
  activeUser: UserData | null = null;
  public activeUser$: BehaviorSubject<UserData | null> =
    new BehaviorSubject<UserData | null>(this.activeUser);

  // private activeUserSubject: BehaviorSubject<UserData | null> =
  //   new BehaviorSubject<UserData | null>(this.activeUser);
  // public activeUser$: Observable<UserData | null> =
  //   this.activeUserSubject.asObservable();

  setActiveUser = (user: UserData): void => {
    this.activeUser = user;
    this.activeUser$.next(this.activeUser);
    console.log('Active user set: ', this.activeUser, user);
  };

  getActiveUser = (): BehaviorSubject<UserData | null> => {
    return this.activeUser$;
    // console.log(this.activeUser$);
    // return this.activeUser$.asObservable();
  };
}
