import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Database } from 'src/app/shared/model/database.model';
import { DATABASE_URL } from '../constants';
import { Airport } from 'src/app/shared/model/airport.model';
import { UserData } from 'src/app/shared/model/user-data.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getDatabase(): Observable<Database> {
    return this.http.get<Database>(DATABASE_URL + '/airports');
  }

  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(DATABASE_URL + '/users');
  }
}
