import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-heart-rate-grid',
  templateUrl: './heart-rate-grid.component.html',
  styleUrls: ['./heart-rate-grid.component.scss']
})
export class HeartRateGridComponent implements OnInit {

  @Input()
  public model!: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
