/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

/* our own custom components */
//import { SomeCustomComponent } from './some-custom/some-custom.component';

@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    //SomeCustomComponent
  ],
  exports: [
    /* angular stuff */
    MaterialModule,
    HttpClientModule
    //FormsModule,
  ]
})
export class SharedModule { }