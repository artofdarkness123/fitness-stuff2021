export interface Person {
  weight: number;
  height: number;
  ageInYears: number;
  waistLength: number; // at navel for women
  neckLength: number; // at fullest point

  //region For Women
  wristMeasurement: number; // at fullest point
  hipMeasurement: number; // at fullest point
  forearmMeasurement: number; // at fullest point
  //endregion

  //region Calculated Properties
  averageBMR: number;
  bmi: number;
  //endregion

  //region BFI Method 1
  leanBodyMass: number;
  bodyFatWeight: number;
  //endregion

  //region US Navy BFI
  leanBodyMassUSNavy: number;
  bodyFatWeightUSNavy: number;
  //endregion

  //region Average BFI
  leanBodyMassAverage: number;
  bodyFatWeightAverage: number;
  bfiAverage: number;
  //endregion

  //region Heart Rate
  maxHeartRatesBPM: number;
  lowHeartRateBPM: number;
  midHeartRateBPM: number;
  highHeartRateBPM: number;
  //endregion

  //region Abtract Properties
  originalHarrisBenedictBMR: number;
  revisedHarrisBenedictBMR: number;
  mifflinStJeorBMR: number;
  bmr: number;
  bfi: number;
  USNavyBFI: number;
  //endregion
}
