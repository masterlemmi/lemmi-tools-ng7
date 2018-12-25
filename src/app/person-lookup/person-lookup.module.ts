import { PersonService } from './services/person.service';
import { SharedModule } from './../shared/shared.module';
import { PersonLookupRoutingModule } from './person-lookup-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsideTestComponent } from './inside-test/inside-test.component';

@NgModule({
  declarations: [InsideTestComponent],
  imports: [
    CommonModule,
    PersonLookupRoutingModule,
    SharedModule
  ],
  providers: [PersonService]
})
export class PersonLookupModule { }
