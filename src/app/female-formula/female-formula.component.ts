import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenderEnum } from '../../models/gender-enum';
import { Person } from '../../models/person';
import { CalculationService } from '../../services/calculation-service';

@Component({
  selector: 'app-female-formula',
  templateUrl: './female-formula.component.html',
  styleUrls: ['./female-formula.component.scss']
})
export class FemaleFormulaComponent implements OnInit {

  public form!: FormGroup;
  public model!: Person;
  public readonly femaleGender: GenderEnum = GenderEnum.Female;

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
      wristMeasurement: ['', Validators.compose([Validators.required, Validators.min(1)])],
      hipMeasurement: ['', Validators.compose([Validators.required, Validators.min(1)])],
      forearmMeasurement: ['', Validators.compose([Validators.required, Validators.min(1)])],
    });
  }

  public calculate(): void {

    this.model = {} as Person;

    this.model.ageInYears = this.form.get('ageInYears')!.value;
    this.model.height = this.form.get('height')!.value;
    this.model.weight = this.form.get('weight')!.value;
    this.model.waistLength = this.form.get('waistLength')!.value;
    this.model.neckLength = this.form.get('neckLength')!.value;
    this.model.wristMeasurement = this.form.get('wristMeasurement')!.value;
    this.model.hipMeasurement = this.form.get('hipMeasurement')!.value;
    this.model.forearmMeasurement = this.form.get('forearmMeasurement')!.value;

    this.model = this.calculationService.calculateFemale(this.model);

    console.log(this.model);
  }

}
