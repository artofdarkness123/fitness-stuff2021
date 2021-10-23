import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenderEnum } from '../../models/gender-enum';
import { Person } from '../../models/person';
import { CalculationService } from '../../services/calculation-service';

@Component({
  selector: 'app-male-formula',
  templateUrl: './male-formula.component.html',
  styleUrls: ['./male-formula.component.scss']
})
export class MaleFormulaComponent implements OnInit {

  public form!: FormGroup;
  public model!: Person;
  public readonly maleGender: GenderEnum = GenderEnum.Male;

  constructor(
    private calculationService: CalculationService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ageInYears: ['', Validators.compose([Validators.required, Validators.min(1)])],
      height: ['', Validators.compose([Validators.required, Validators.min(1)])],
      weight: ['', Validators.compose([Validators.required, Validators.min(1)])],
      waistLength: ['', Validators.compose([Validators.required, Validators.min(1)])],
      neckLength: ['', Validators.compose([Validators.required, Validators.min(1)])],
    });
  }

  public calculate(): void {

    this.model = {} as Person;

    this.model.ageInYears = this.form.get('ageInYears')!.value;
    this.model.height = this.form.get('height')!.value;
    this.model.weight = this.form.get('weight')!.value;
    this.model.waistLength = this.form.get('waistLength')!.value;
    this.model.neckLength = this.form.get('neckLength')!.value;

    this.model = this.calculationService.calculateMale(this.model);

    console.log(this.model);
  }

}
