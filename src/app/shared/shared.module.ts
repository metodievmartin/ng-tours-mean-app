import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SplitFirstPipe } from './pipes/split-first.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { MiniSpinnerComponent } from './components/mini-spinner/mini-spinner.component';
import { ThemedLinkBtnComponent } from './components/themed-link-btn/themed-link-btn.component';
import { RouterModule } from '@angular/router';
import { BurgerIconComponent } from './components/burger-icon/burger-icon.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    SplitFirstPipe,
    AlertComponent,
    MiniSpinnerComponent,
    ThemedLinkBtnComponent,
    BurgerIconComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SpinnerComponent,
    SplitFirstPipe,
    AlertComponent,
    MiniSpinnerComponent,
    ThemedLinkBtnComponent,
    BurgerIconComponent
  ]
})
export class SharedModule {
}
