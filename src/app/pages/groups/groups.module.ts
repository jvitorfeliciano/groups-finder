import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { GroupComponent } from './group/group.component';

@NgModule({
  declarations: [GroupsPageComponent, GroupComponent],
  imports: [CommonModule],
  exports: [GroupsPageComponent],
})
export class GroupsModule {}
