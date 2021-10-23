export interface Person {
  weight: number;
  height: number;
  ageInYears: number;
  waistLength: number;
  neckLength: number;

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
