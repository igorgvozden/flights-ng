import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHotelComponent } from './find-hotel.component';

describe('FindHotelComponent', () => {
  let component: FindHotelComponent;
  let fixture: ComponentFixture<FindHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindHotelComponent]
    });
    fixture = TestBed.createComponent(FindHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
