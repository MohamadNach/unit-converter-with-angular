import { Injectable } from '@angular/core';
import { ConversionDef } from './conversion-def.class';
import { ConverterCategoryDef } from './converter-def.class';
@Injectable({
  providedIn: 'root',
})
export class ConversionEngineService {
  weightDefs: ConversionDef[] = [
    new ConversionDef('Kg to lib', 'Kg', 'lbs', 2.20462262185),
    new ConversionDef('lib to Kg', 'lbs', 'Kg', 1 / 2.20462262185),
  ];

  distanceDefs: ConversionDef[] = [
    new ConversionDef('Meters to Miles', 'Meters', 'Miles', 1 / 1609.344),
    new ConversionDef('Miles to Meters', 'Miles', 'Meters', 1609.344),
  ];
  temperatureDefs: ConversionDef[] = [
    new ConversionDef('Celsius to Fahrenheit', 'Celsius', 'Fahrenheit', 1.8),
    new ConversionDef('Fahrenheit to Celsius', 'Fahrenheit', 'Celsius', 1.8),
  ];

  converterCategories: ConverterCategoryDef[] = [
    new ConverterCategoryDef('Weight', 'monitor_weight', this.weightDefs),
    new ConverterCategoryDef('Distance', 'android', this.distanceDefs),
    new ConverterCategoryDef('Termperature', 'cloud', this.temperatureDefs),
  ];

  private categoryIndex = 0;
  private conversionIndex = 0;
  constructor() {}

  getConverterCategories(): ConverterCategoryDef[] {
    return this.converterCategories;
  }

  getCurrentConversions(): ConversionDef[] {
    return this.converterCategories[this.categoryIndex].conversions;
  }

  getCurrentConversion(): ConversionDef {
    return this.converterCategories[this.categoryIndex].conversions[
      this.conversionIndex
    ];
  }

  getConverterCategory(name: string): ConverterCategoryDef {
    return this.converterCategories[this.categoryIndex];
  }

  setCategoryIndex(name: string) {
    for (let i = 0; i < this.converterCategories.length; i++) {
      if (name == this.converterCategories[i].name) {
        this.categoryIndex = i;
        return;
      }
    }
    return;
  }
  setConversionIndex(name: string) {
    let conversionDefs =
      this.converterCategories[this.categoryIndex].conversions;
    for (let i = 0; i < conversionDefs.length; i++) {
      if (name == conversionDefs[i].name) {
        this.conversionIndex = i;
        return;
      }
    }
    return;
  }

  kgTolbs(num: number) {
    let conversionDefs =
      this.converterCategories[this.categoryIndex].conversions[
        this.conversionIndex
      ];
    // let result = num * 2.20462262;
    let result = num * conversionDefs.coeff;
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    return result;
  }

  lbsToKg(num: number) {
    let conversionDefs =
      this.converterCategories[this.categoryIndex].conversions[
        this.conversionIndex
      ];
    let result = num * conversionDefs.coeff;
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    return result;
  }

  metersToMiles(num: number) {
    let conversionDefs =
      this.converterCategories[this.categoryIndex].conversions[
        this.conversionIndex
      ];
    let result = num * conversionDefs.coeff;
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    return result;
  }
  milesTometers(num: number) {
    let conversionDefs =
      this.converterCategories[this.categoryIndex].conversions[
        this.conversionIndex
      ];
    let result = num * conversionDefs.coeff;
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    return result;
  }
  //********
  celsiusToFahrenheit(num: number) {
    let conversionDefs =
      this.converterCategories[this.categoryIndex].conversions[
        this.conversionIndex
      ];
    let result = num * conversionDefs.coeff + 32;
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    return result;
  }
  fahrenheitToCelsius(num: number) {
    let conversionDefs =
      this.converterCategories[this.categoryIndex].conversions[
        this.conversionIndex
      ];
    let result = (num - 32) / conversionDefs.coeff;
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    return result;
  }
}
