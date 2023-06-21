import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Group } from 'src/app/models/groups';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
})
export class GroupsPageComponent implements OnInit {
  groups: Group[];
  loading: boolean = true;
  subscription: Subscription;
  constructor(private groupsService: GroupsService) {}

  async ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.getGroups);
  }

  error = (error: GeolocationPositionError) => console.log(error);

  getGroups = (position: GeolocationPosition) => {
    console.log(position.coords.latitude, position.coords.longitude);
    this.groupsService
      .get(position.coords.latitude, position.coords.longitude)
      .subscribe({
        next: (res) => {
          this.groups = res;
          this.loading = false;
          console.log(this.groups);
        },
        error: (err) => {
          this.loading = false;
          console.log(err);
        },
      });
  };
}
