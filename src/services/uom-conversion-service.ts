import { Injectable } from "@angular/core";

@Injectable()
export class uomConversionService {

  public poundsToKiligrams(pounds: number): number {
    return pounds * 0.453592;
  }

  public inchesToCentemeters(inches: number): number {
    return inches * 2.54000137161;
  }
}
