import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsPageComponent } from './pages/groups/groups-page/groups-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'grupos', component: GroupsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
