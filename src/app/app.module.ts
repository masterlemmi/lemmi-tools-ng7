
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonLookupModule } from './person-lookup/person-lookup.module';
import { TestComponent } from './test/test.component';
import { Test2CompComponent } from './test2-comp/test2-comp.component';
import { CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2CompComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    PersonLookupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
