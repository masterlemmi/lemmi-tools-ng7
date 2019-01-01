import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'person-lookup',
  templateUrl: './lookup-container.component.html',
  styleUrls: ['./lookup-container.component.scss']
})
export class LookupContainerComponent implements OnInit {

  persons: any = [
    {name: "Lemuel",
    nickname: "Lem"},
    {name: "Patrick Luther Taeza", nickname:"Teri"},
    {name: "Patrick Luther Taeza", nickname:"Teri"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
