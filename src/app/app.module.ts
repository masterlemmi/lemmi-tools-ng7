import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonLookupModule } from './person-lookup/person-lookup.module';
import { TestComponent } from './test/test.component';
import { Test2CompComponent } from './test2-comp/test2-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2CompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonLookupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
