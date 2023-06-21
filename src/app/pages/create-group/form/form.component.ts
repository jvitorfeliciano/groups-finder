import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GroupCreationModel } from 'src/app/models/groups';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  geolocationPosition: GeolocationPosition;
  groupForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    link: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private groupsService: GroupsService) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => (this.geolocationPosition = position),
      (error: GeolocationPositionError) => console.log(error)
    );
  }

  onSubmit() {
    const data = {
      ...this.groupForm.value,
      latitude: this.geolocationPosition.coords.latitude,
      longitude: this.geolocationPosition.coords.longitude,
    } as GroupCreationModel;

    this.groupsService.create(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err.error.message, 'error here'),
    });
  }
}
