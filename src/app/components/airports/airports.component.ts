import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AirportsService } from 'src/app/api/services/airports.service';
import { Airport } from 'src/app/shared/model/airport.model';
import { DomSanitizer } from '@angular/platform-browser';

@UntilDestroy()
@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss'],
})
export class AirportsComponent implements OnInit, AfterViewInit {
  @ViewChild('map') iframe;
  airports: Airport[] = [];

  public url =
    'https://storage.googleapis.com/maps-solutions-mplwvggm2b/locator-plus/qlav/locator-plus.html';

  constructor(
    private airportsService: AirportsService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.airportsService
      .getAirports()
      .pipe(untilDestroyed(this))
      .subscribe((airports) => {
        if (airports) {
          this.airports = airports;
          console.log(this.airports);
        }
      });
  }

  ngAfterViewInit(): void {
    console.log(this.iframe);
    this.iframe.src = this.url;
  }
}
