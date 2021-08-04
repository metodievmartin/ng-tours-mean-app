import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  exports: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
