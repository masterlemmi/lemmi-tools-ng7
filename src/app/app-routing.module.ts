import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'person-lookup', loadChildren: './person-lookup/person-lookup.module#PersonLookupModule' },
  { path: 'test', component: TestComponent },
  { path: '', pathMatch: 'full', redirectTo: ''},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
