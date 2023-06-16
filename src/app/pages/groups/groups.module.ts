import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { GroupComponent } from './group/group.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [GroupsPageComponent, GroupComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [GroupsPageComponent],
})
export class GroupsModule {}
