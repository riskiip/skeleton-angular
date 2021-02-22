import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesComponent } from './tes.component';



@NgModule({
  declarations: [TesComponent],
  imports: [
    CommonModule
  ],
  exports: [TesComponent]
})
export class TesModule { }
