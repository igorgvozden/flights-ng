import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from 'src/app/shared/model/airport.model';
import { DATABASE_URL } from '../constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  constructor(private http: HttpClient) {}

  getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(DATABASE_URL + '/airports');
  }
}
