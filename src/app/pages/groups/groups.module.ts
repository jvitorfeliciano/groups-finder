import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsPageComponent } from './groups-page/groups-page.component';

@NgModule({
  declarations: [GroupsPageComponent],
  imports: [CommonModule],
  exports: [GroupsPageComponent],
})
export class GroupsModule {}
