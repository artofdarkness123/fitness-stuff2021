import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-bmr-results',
  templateUrl: './bmr-results.component.html',
  styleUrls: ['./bmr-results.component.scss']
})
export class BmrResultsComponent implements OnInit {

  @Input()
  public model!: Person;

  constructor() {
  }

  ngOnInit(): void {
  }

}
