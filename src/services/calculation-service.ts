import { Injectable } from "@angular/core";
import { Person } from "../models/person";
import { uomConversionService } from "./uom-conversion-service";

@Injectable()
export class CalculationService {

  constructor(private uowConversionService: uomConversionService) {

  }

  public calculateMale(model: Person): Person {
    let heightInCM = this.uowConversionService.inchesToCentemeters(model.height);
    let heightInMeters = heightInCM / 100;
    let waistLengthInCM = this.uowConversionService.inchesToCentemeters(model.waistLength);
    let neckLengthInCM = this.uowConversionService.inchesToCentemeters(model.neckLength);
    let weightInKg = this.uowConversionService.poundsToKiligrams(model.weight);

    model.maxHeartRatesBPM = 220 - model.ageInYears;
    model.lowHeartRateBPM = model.maxHeartRatesBPM * 0.5;
    model.midHeartRateBPM = model.maxHeartRatesBPM * 0.7;
    model.highHeartRateBPM = model.maxHeartRatesBPM * 0.85;

    // bfi source = https://www.bmi-calculator.net/body-fat-calculator/body-fat-formula.php
    model.leanBodyMass = ((model.weight * 1.082) + 94.42) - (model.waistLength * 4.15);
    model.bodyFatWeight = model.weight - model.leanBodyMass;
    model.bfi = model.bodyFatWeight * 100 / model.weight;

    // source = https://www.omnicalculator.com/health/navy-body-fat
    model.USNavyBFI = 495.0 / (1.0324 - 0.19077 * Math.log10(waistLengthInCM - neckLengthInCM) + 0.15456 * Math.log10(heightInCM)) - 450.0;
    model.bodyFatWeightUSNavy = model.USNavyBFI / 100 * model.weight;
    model.leanBodyMassUSNavy = model.weight - model.bodyFatWeightUSNavy;

    model.leanBodyMassAverage = (model.leanBodyMass + model.leanBodyMassUSNavy) / 2;
    model.bodyFatWeightAverage = (model.bodyFatWeight + model.bodyFatWeightUSNavy) / 2;
    model.bfiAverage = (model.bfi + model.USNavyBFI) / 2;

    model.bmi = this.uowConversionService.poundsToKiligrams(model.weight) / Math.pow(heightInMeters, 2);

    model.originalHarrisBenedictBMR = (13.7516 * weightInKg) + (5.0033 * heightInCM) + (6.7550 * model.ageInYears) + 66.4730;
    model.revisedHarrisBenedictBMR = (13.397 * weightInKg) + (4.799 * heightInCM) + (5.677 * model.ageInYears) + 88.392;
    model.mifflinStJeorBMR = (10.0 * weightInKg) + (6.25 * heightInCM) + (5.0 * model.ageInYears) + 5.0;
    model.bmr = (13.7 * weightInKg) + (5.0 * heightInCM) + (6.8 * model.ageInYears) + 66.0;

    model.averageBMR = (model.originalHarrisBenedictBMR + model.revisedHarrisBenedictBMR + model.mifflinStJeorBMR + model.bmr) / 4.0;

    return model;
  }

  public calculateFemale(model: Person): Person {

    let heightInCM = this.uowConversionService.inchesToCentemeters(model.height);
    let heightInMeters = heightInCM / 100;
    let waistLengthInCM = this.uowConversionService.inchesToCentemeters(model.waistLength);
    let neckLengthInCM = this.uowConversionService.inchesToCentemeters(model.neckLength);
    let hipMeasurementInCM = this.uowConversionService.inchesToCentemeters(model.hipMeasurement);
    let weightInKg = this.uowConversionService.poundsToKiligrams(model.weight);

    model.maxHeartRatesBPM = 220 - model.ageInYears;
    model.lowHeartRateBPM = model.maxHeartRatesBPM * 0.5;
    model.midHeartRateBPM = model.maxHeartRatesBPM * 0.7;
    model.highHeartRateBPM = model.maxHeartRatesBPM * 0.85;

    // bfi source = https://www.bmi-calculator.net/body-fat-calculator/body-fat-formula.php
    model.leanBodyMass = ((model.weight * 0.732) + 8.987) + (model.wristMeasurement / 3.140) + (model.waistLength * 0.157) + (model.hipMeasurement * 0.249) + (model.forearmMeasurement * 0.434);
    model.bodyFatWeight = model.weight - model.leanBodyMass;
    model.bfi = model.bodyFatWeight * 100 / model.weight;

    // source = https://www.omnicalculator.com/health/navy-body-fat
    model.USNavyBFI = 495 / (1.29579 - 0.35004 * Math.log10(waistLengthInCM + hipMeasurementInCM - neckLengthInCM) + 0.22100 * Math.log10(heightInCM)) - 450;
    model.bodyFatWeightUSNavy = model.USNavyBFI / 100 * model.weight;
    model.leanBodyMassUSNavy = model.weight - model.bodyFatWeightUSNavy;

    model.leanBodyMassAverage = (model.leanBodyMass + model.leanBodyMassUSNavy) / 2;
    model.bodyFatWeightAverage = (model.bodyFatWeight + model.bodyFatWeightUSNavy) / 2;
    model.bfiAverage = (model.bfi + model.USNavyBFI) / 2;

    model.bmi = this.uowConversionService.poundsToKiligrams(model.weight) / Math.pow(heightInMeters, 2);

    //model.originalHarrisBenedictBMR = (13.7516 * weightInKg) + (5.0033 * heightInCM) + (6.7550 * model.ageInYears) + 66.4730;
    model.revisedHarrisBenedictBMR = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCM) - (4.330 * model.ageInYears);

    // source = https://blog.nasm.org/nutrition/resting-metabolic-rate-how-to-calculate-and-improve-yours
    model.mifflinStJeorBMR = (10.0 * weightInKg) + (6.25 * heightInCM) + (5.0 * model.ageInYears) - 161;

    // source = https://www.healthline.com/health/what-is-basal-metabolic-rate
    model.bmr = 655 + (9.6 * weightInKg) + (1.8 * heightInCM) - (4.7 * model.ageInYears);

    model.averageBMR = (model.revisedHarrisBenedictBMR + model.mifflinStJeorBMR + model.bmr) / 3.0;

    return model;
  }
}
