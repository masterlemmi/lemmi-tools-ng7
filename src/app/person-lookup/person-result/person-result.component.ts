import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'person-result',
  templateUrl: './person-result.component.html',
  styleUrls: ['./person-result.component.scss']
})
export class PersonResultComponent implements OnInit {

  @Input() person: any;

  constructor() { }

  ngOnInit() {
  }

}
