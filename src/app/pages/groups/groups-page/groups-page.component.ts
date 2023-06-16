import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/groups';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
})
export class GroupsPageComponent implements OnInit {
  groups: Group[];
  loading: boolean = true;
  locationCoordinates: GeolocationPosition;

  constructor(
    private geolocationService: GeolocationService,
    private groupsService: GroupsService
  ) {}

  ngOnInit(): void {
    this.locationCoordinates = this.geolocationService.getLocationCoordinates();
    this.groupsService
      .getGroups(
        this.locationCoordinates.coords.latitude,
        this.locationCoordinates.coords.longitude
      )
      .subscribe({
        next: (res) => {
          this.groups = res;
          this.loading = false;
          console.log(this.groups)
        },
        error: (err) => {
          this.loading = false;
          console.log(err);
        },
      });
  }
}
