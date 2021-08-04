import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './components/user-profile/user-profile.component';


const usersRoutes: Routes = [
  { path: '', redirectTo: '/users/me' },
  { path: 'me', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
