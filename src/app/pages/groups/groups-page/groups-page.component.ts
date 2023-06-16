import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
})
export class GroupsPageComponent implements OnInit {
  constructor(private geolocationService: GeolocationService) {}

  ngOnInit(): void {
    console.log(this.geolocationService.getLocationCoordinates());
  }
}
