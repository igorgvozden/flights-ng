import {
  Component,
  OnChanges,
  SimpleChanges,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  Observable,
  BehaviorSubject,
  map,
  startWith,
  lastValueFrom,
} from 'rxjs';
import { FlightsService } from 'src/app/api/services/flights.service';
import { Airport } from 'src/app/shared/model/airport.model';
import { Flight } from 'src/app/shared/model/flight.model';
import { flightDirectionOptions, airportsCodes } from '../flights.constants';
import { AirportsService } from 'src/app/api/services/airports.service';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { RoundFlights } from 'src/app/api/services/flights.service';

@UntilDestroy()
@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss'],
})
export class SearchFlightsComponent implements OnChanges, OnInit {
  @Output() emitFlights = new BehaviorSubject({});
  public today: string = new Date().toJSON().slice(0, 10);

  isRoundTrip: boolean = false;
  passengerCount: number = 1;
  flightEconomyClass: string = 'economy';

  flights: RoundFlights = { departureFlights: [], returnFlights: [] };

  // emitFlights = new EventEmitter();

  searchData: FormGroup = new FormGroup({
    origin: new FormControl(''),
    destination: new FormControl(''),
    departureDate: new FormControl(this.today),
    returnDate: new FormControl(''),
  });

  public cities: string[] = [];
  filteredOriginCity: Observable<string[]>;
  filteredDestinationCity: Observable<string[]>;

  airports: Airport[] = [];

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService,
    private airportsService: AirportsService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.airports = this.route.parent?.snapshot.data['airports'];
    this.cities = this.airports.map((airport) => airport.city);

    this.flightsService
      .getActiveFlightSearch()
      .pipe(untilDestroyed(this))
      .subscribe((flights) => {
        this.flights = flights;

        // console.log(this.flights, this.isRoundTrip);
        this.emitFlights.next(this.flights);
      });

    this.filteredOriginCity = this.filterCity('origin');
    this.filteredDestinationCity = this.filterCity('destination');
  }

  selectFlightDirection(event) {
    if (!event) {
      this.searchData.patchValue({
        returnDate: '',
      });
    }
  }

  selectPassengerNumber(event) {
    this.passengerCount = event.value;
  }

  selectEconomyClass(event) {
    this.flightEconomyClass = event.value;
  }

  onSubmit = async () => {
    console.log(this.searchData.value, this.airports);
    const { origin, destination, departureDate, returnDate } =
      this.searchData.getRawValue();

    const getCityCode = (cityName: string) => {
      return this.airports.filter((airport) => airport.city === cityName)[0]
        .code;
    };

    if (origin.length > 0 && destination.length < 1) {
      // ako ima origin
      const originCityCode = getCityCode(origin);

      this.flightsService.getFlightsOnDateAndOrigin(
        departureDate,
        originCityCode
      );
    } else if (origin.length < 1 && destination.length > 0) {
      // ako ima destination
      const destinationCityCode = getCityCode(destination);

      this.flightsService.getFlightsOnDateAndDestination(
        departureDate,
        destinationCityCode
      );
    } else if (
      origin.length > 0 &&
      destination.length > 0 &&
      !this.isRoundTrip
    ) {
      // ako ima origin i destination i nije roundTrip
      this.flightsService.getFlightsFromOriginToDestination(
        getCityCode(origin),
        getCityCode(destination),
        departureDate
      );
    } else if (
      origin.length > 0 &&
      destination.length > 0 &&
      this.isRoundTrip
    ) {
      // isRoundTrip
      this.flightsService.getRoundTrips(
        getCityCode(origin),
        getCityCode(destination),
        departureDate,
        returnDate
      );
    } else {
      console.log('date only');
      // ako ima samo date
      this.flightsService.getFlightsOnDate(departureDate);
    }
  };

  filterCity = (originOrDestination: string) => {
    return this.searchData.get(originOrDestination)!.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  };

  private _filter(value: string): string[] {
    // console.log(value);
    const filterValue = this._normalizeValue(value);
    return this.cities.filter((city) =>
      this._normalizeValue(city).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    // console.log(value);
    if (typeof value === 'string') {
      return value.toLowerCase().replace(/\s/g, '');
    }
    return '';
  }
}
