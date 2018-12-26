import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  
  imports: [
    CommonModule, BrowserAnimationsModule
  ],
  exports: [
    AppRoutingModule, 
    

  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
 }
