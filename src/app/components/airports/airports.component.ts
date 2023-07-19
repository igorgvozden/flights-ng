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
  @ViewChild('iframe') iframe;
  airports: Airport[] = [];

  spot = '32.8998,-97.0403';

  src =
    'https://maps.google.com/maps?width=1000&amp;height=600&amp;hl=en&amp;q=%20new%20york+()&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;&output=embed';

  src1 =
    'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=32.8998,-97.0403(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed';

  mapSrc = `https://maps.google.com/maps?width=1000&amp;height=600&amp;hl=en&amp;q=${this.spot}+(My%20Business%20Name)&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;&output=embed`;
  url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.src);
  url1 = () => this.domSanitizer.bypassSecurityTrustResourceUrl(this.mapSrc);

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
        }
      });
  }

  ngAfterViewInit(): void {
    console.log(this.iframe);
    // this.iframe.src = this.url;
  }
}
