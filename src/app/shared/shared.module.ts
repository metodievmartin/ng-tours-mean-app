import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SplitFirstPipe } from './pipes/split-first.pipe';


@NgModule({
  declarations: [
    SpinnerComponent,
    SplitFirstPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    SplitFirstPipe
  ]
})
export class SharedModule { }
