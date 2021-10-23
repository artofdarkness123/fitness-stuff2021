import { Component, Input, OnInit } from '@angular/core';
import { person } from '../../models/person';

@Component({
  selector: 'app-bmr-results',
  templateUrl: './bmr-results.component.html',
  styleUrls: ['./bmr-results.component.scss']
})
export class BmrResultsComponent implements OnInit {

  @Input()
  public model!: person;

  constructor() {
  }

  ngOnInit(): void {
  }

}
