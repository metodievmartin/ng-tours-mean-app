import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SplitFirstPipe } from './pipes/split-first.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { MiniSpinnerComponent } from './components/mini-spinner/mini-spinner.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    SplitFirstPipe,
    AlertComponent,
    MiniSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        SpinnerComponent,
        SplitFirstPipe,
        AlertComponent,
        MiniSpinnerComponent
    ]
})
export class SharedModule { }
