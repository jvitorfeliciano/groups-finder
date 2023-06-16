import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private locationCoordinates: object = {};

  constructor() {}

  successCallback = (position: GeolocationPosition) =>
    (this.locationCoordinates = position);

  errorCallback = (error: GeolocationPositionError) => console.log(error);

  getLocationCoordinates() {
    return this.locationCoordinates;
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      this.successCallback,
      this.errorCallback
    );
  }
}
