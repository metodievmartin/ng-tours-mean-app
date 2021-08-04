import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserSettingsComponent } from './components/user-profile/user-settings/user-settings.component';


const usersRoutes: Routes = [
  { path: '', component: UserProfileComponent, children: [
      { path: '', component: UserSettingsComponent },
      { path: 'bookings', component: UserSettingsComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
