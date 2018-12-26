import { InsideTestComponent } from './inside-test/inside-test.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonSearchComponent } from './person-search/person-search.component';

const routes: Routes = [
  { path: '', component: PersonListComponent, data: { animation: 'people' } }, // default route of the module
  { path: 'id/:personId', component: PersonDetailComponent, data: { animation: 'person' } },
  { path: 'edit/:personId', component: PersonEditComponent, data: { animation: 'person' } },
  { path: 'search', component: PersonSearchComponent, data: { animation: 'person' } }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonLookupRoutingModule { }
