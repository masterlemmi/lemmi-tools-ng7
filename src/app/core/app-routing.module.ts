import { TestComponent } from '../test/test.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonLookupModule} from 'app/person-lookup/person-lookup.module';



const routes: Routes = [
{ path: 'people', loadChildren: () => PersonLookupModule},
  { path: 'test', component: TestComponent },
  { path: '', pathMatch: 'full', redirectTo: ''},
  { path: "**",redirectTo:"test"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
