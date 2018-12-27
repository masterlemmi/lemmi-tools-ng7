import { PersonService } from './services/person.service';
import { SharedModule } from './../shared/shared.module';
import { PersonLookupRoutingModule } from './person-lookup-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsideTestComponent } from './inside-test/inside-test.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { LookupContainerComponent } from './lookup-container/lookup-container.component';

@NgModule({
  declarations: [InsideTestComponent, PersonListComponent, PersonDetailComponent, PersonEditComponent, PersonSearchComponent, LookupContainerComponent],
  imports: [
    CommonModule,
    PersonLookupRoutingModule,
    SharedModule
  ],
  providers: [PersonService]
})
export class PersonLookupModule { }
