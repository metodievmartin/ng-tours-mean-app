import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UsersRoutingModule } from './users-routing.module';
import { SideNavItemComponent } from './components/user-profile/side-nav/side-nav-item/side-nav-item.component';
import { SideNavComponent } from './components/user-profile/side-nav/side-nav.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    SideNavComponent,
    SideNavItemComponent
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
