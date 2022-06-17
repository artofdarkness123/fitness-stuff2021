import { Component, Input, OnInit } from '@angular/core';
import { GenderEnum } from '../../models/gender-enum';
import { Person } from '../../models/person';

@Component({
  selector: 'app-bfi-table',
  templateUrl: './bfi-table.component.html',
  styleUrls: ['./bfi-table.component.scss']
})
export class BfiTableComponent implements OnInit {

  @Input()
  public gender!: GenderEnum;

  @Input()
  public model!: Person;

  public GenderEnum = GenderEnum;

  constructor() { }

  ngOnInit(): void {
  }
}
