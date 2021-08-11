import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserSettingsComponent } from './components/user-profile/user-settings/user-settings.component';
import { AuthGuard } from '../auth/guards';
import { UserBookingsComponent } from './components/user-profile/user-bookings/user-bookings.component';


const usersRoutes: Routes = [
  { path: '', component: UserProfileComponent, canActivate: [AuthGuard], children: [
      { path: '', component: UserSettingsComponent },
      { path: 'bookings', component: UserBookingsComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
