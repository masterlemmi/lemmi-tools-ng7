import { HomeComponent } from './home/home.component';
import { FirstPageComponent } from './../first-page/first-page.component';
import { TestComponent } from '../test/test.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonLookupModule} from 'app/person-lookup/person-lookup.module';
import { MyNavComponent } from 'app/my-nav/my-nav.component';



const routes: Routes = [
{ path: 'people', loadChildren: () => PersonLookupModule},
  { path: 'test', component: MyNavComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: ''},
  { path: "**",redirectTo:"test"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
