import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PersonService } from '../services/person.service';
import { switchMap } from 'rxjs/operators';
import { Person } from '../models/person';
import { Observable } from 'rxjs';

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  isEditing = true;

  person$: Observable<Person>
  objectKeys = Object.keys;
  name:string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PersonService
  ) {}

  ngOnInit() {

    console.log("GETTING PERSON");
    this.person$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
      let found = this.service.getPerson(+params.get('personId'))
      
        console. log (found);
        return found; 
      }));
  }

  searchFB(person: Person){
    return `https://www.facebook.com/search/top/?q=${person.name}&epa=SEARCH_BOX`;
  }

}
