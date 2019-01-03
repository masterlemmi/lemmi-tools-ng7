/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ImagePreloadDirective } from './directives/image-preload.directive';
import { FormsModule } from '@angular/forms';
import { BurgerToggleDirective } from './directives/burger-toggle.directive';
import { InputFocusDirective } from './directives/input-focus.directive';
import { ImageModalComponent } from './image-modal/image-modal.component';

/* our own custom components */
//import { SomeCustomComponent } from './some-custom/some-custom.component';

@NgModule({
  imports: [
    /* angular stuff */
    HttpClientModule, CommonModule,
    
  ],
  declarations: [
    //SomeCustomComponent
    ImagePreloadDirective,
    BurgerToggleDirective, InputFocusDirective, ImageModalComponent
    
  ],
  exports: [
    /* angular stuff */
    HttpClientModule,
    FormsModule,
    ImagePreloadDirective, BurgerToggleDirective, InputFocusDirective,
    ImageModalComponent
  ]
})
export class SharedModule { }