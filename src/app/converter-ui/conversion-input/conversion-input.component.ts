import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';

@Component({
  selector: 'app-conversion-input',
  templateUrl: './conversion-input.component.html',
  styleUrls: ['./conversion-input.component.css'],
})
export class ConversionInputComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  conversionInUnitText: string = 'Input';

  constructor(private conversionService: ConversionEngineService) {}

  ngOnInit() {
    // converter change detected
    this.parentForm.get('converterValue')?.valueChanges.subscribe((value) => {
      this.conversionService.setConversionIndex(value);
      let conversionDef = this.conversionService.getCurrentConversion();
      this.conversionInUnitText = 'Input as ' + conversionDef.inUnit;
      console.log(`conversionDef.inUnit: ${conversionDef.inUnit}`);
      let unit = conversionDef.inUnit;
      return unit;
    });

    // category change detection
    this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      this.conversionInUnitText = 'Input';
    });

    // input field change
    this.parentForm.get('conversionInput')?.valueChanges.subscribe((value) => {
      let output_value = value;

      // toDo : the conversion calculations
      let conversionDef = this.conversionService.getCurrentConversion();
      let unit = conversionDef.inUnit;
      switch (true) {
        case unit == 'Kg':
          output_value = this.conversionService.kgTolbs(value);
          this.parentForm.get('conversionOutput')?.setValue(output_value);

          break;
        case unit == 'lbs':
          output_value = this.conversionService.lbsToKg(value);
          this.parentForm.get('conversionOutput')?.setValue(output_value);

          break;
        case unit == 'Meters':
          output_value = this.conversionService.metersToMiles(value);
          this.parentForm.get('conversionOutput')?.setValue(output_value);

          break;
        case unit == 'Miles':
          output_value = this.conversionService.milesTometers(value);
          this.parentForm.get('conversionOutput')?.setValue(output_value);

          break;
        case unit == 'Celsius':
          output_value = this.conversionService.celsiusToFahrenheit(value);
          this.parentForm.get('conversionOutput')?.setValue(output_value);

          break;
        case unit == 'Fahrenheit':
          output_value = this.conversionService.fahrenheitToCelsius(value);
          this.parentForm.get('conversionOutput')?.setValue(output_value);

          break;

        default:
          this.parentForm.get('conversionOutput')?.setValue(output_value);
          break;
      }
      // let output_value = this.conversionService.kgTolbs(value);
      this.parentForm.get('conversionOutput')?.setValue(output_value);
    });
  }
}
