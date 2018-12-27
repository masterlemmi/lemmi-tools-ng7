/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ImagePreloadDirective } from './directives/image-preload.directive';
import { FormsModule } from '@angular/forms';

/* our own custom components */
//import { SomeCustomComponent } from './some-custom/some-custom.component';

@NgModule({
  imports: [
    /* angular stuff */
    MaterialModule,
    HttpClientModule,
    
  ],
  declarations: [
    //SomeCustomComponent
    ImagePreloadDirective
    
  ],
  exports: [
    /* angular stuff */
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ImagePreloadDirective
  ]
})
export class SharedModule { }