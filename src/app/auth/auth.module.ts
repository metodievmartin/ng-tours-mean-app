import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './components/register-page/register-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
