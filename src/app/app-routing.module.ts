import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/create-group/form/form.component';
import { GroupsPageComponent } from './pages/groups/groups-page/groups-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'groups', component: GroupsPageComponent },
  { path: 'create-group', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
