import { InsideTestComponent } from './inside-test/inside-test.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: InsideTestComponent } // default route of the module

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonLookupRoutingModule { }
