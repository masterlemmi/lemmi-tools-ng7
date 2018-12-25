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
  ]
})
export class PersonLookupModule { }
