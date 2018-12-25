/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';

/* our own custom components */
//import { SomeCustomComponent } from './some-custom/some-custom.component';

@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,
  	MaterialModule
  ],
  declarations: [
    //SomeCustomComponent
  ],
  exports: [
    /* angular stuff */
    MaterialModule
    //FormsModule,
  ]
})
export class SharedModule { }