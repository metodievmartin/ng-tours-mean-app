import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './layouts/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RegisterPageComponent } from './layouts/register-page/register-page.component';


const authRoutes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
