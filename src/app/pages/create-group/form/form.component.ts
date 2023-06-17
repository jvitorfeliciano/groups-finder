import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GroupCreationModel } from 'src/app/models/groups';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  groupForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    link: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private geolocationService: GeolocationService,
    private groupsService: GroupsService
  ) {}

  onSubmit() {
    const data = {
      ...this.groupForm.value,
      latitude:
        this.geolocationService.getLocationCoordinates().coords.latitude,
      longitude:
        this.geolocationService.getLocationCoordinates().coords.longitude,
    } as GroupCreationModel; // make the object bevahe according to the GroupCreationModel;
    console.log(data);
    this.groupsService.create(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err.error.message, 'error here'),
    });
  }
}
