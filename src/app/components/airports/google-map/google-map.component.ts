import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
  standalone: true,
  imports: [GoogleMap],
})
export class GoogleMapComponent {
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
  display: google.maps.LatLngLiteral;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event && event.latLng) {
      this.center = event.latLng.toJSON();
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event && event.latLng) {
      this.display = event.latLng.toJSON();
    }
  }
}
