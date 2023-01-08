import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';

@Component({
  selector: 'app-conversion-output',
  templateUrl: './conversion-output.component.html',
  styleUrls: ['./conversion-output.component.css'],
})
export class ConversionOutputComponent {
  @Input() parentForm!: FormGroup;
  conversionOutUnitText: string = 'Output';
  constructor(private conversionService: ConversionEngineService) {}
  ngOnInit() {
    // // converter change detected
    // this.parentForm.get('converterValue')?.valueChanges.subscribe((value) => {
    //   this.conversionService.setConversionIndex(value);
    //   let conversionDef = this.conversionService.getCurrentConversion();
    //   this.conversionInUnitText = 'Output as ' + conversionDef.inUnit;
    // });
    // // category change detection
    // this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
    //   this.conversionInUnitText = 'Output';
    // });
  }
}
