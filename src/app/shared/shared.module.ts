import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SplitFirstPipe } from './pipes/split-first.pipe';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    SplitFirstPipe,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    SplitFirstPipe,
    AlertComponent
  ]
})
export class SharedModule { }
