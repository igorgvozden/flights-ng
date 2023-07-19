import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightOverviewComponent } from './flight-overview.component';

describe('FlightOverviewComponent', () => {
  let component: FlightOverviewComponent;
  let fixture: ComponentFixture<FlightOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightOverviewComponent]
    });
    fixture = TestBed.createComponent(FlightOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
