import { Component, Input } from '@angular/core';
import { Group } from 'src/app/models/groups';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent {
  @Input() group: Group;
}
