import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConversionEngineService } from '../shared/conversion-engine.service';

@Component({
  selector: 'app-converter-ui',
  templateUrl: './converter-ui.component.html',
  styleUrls: ['./converter-ui.component.css'],
})
export class ConverterUiComponent implements OnInit {
  parentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private conversionService: ConversionEngineService
  ) {}

  ngOnInit(): void {
    let firstCategoryName =
      this.conversionService.getConverterCategories()[0].name;
    let firstConversionName =
      this.conversionService.getCurrentConversions()[0].name;
    this.parentForm = this.fb.group({
      categoryValue: new FormControl(firstCategoryName),
      converterValue: new FormControl(/*firstConversionName*/),
      conversionInput: new FormControl(),
      conversionOutput: new FormControl(),
    });
    this.parentForm.valueChanges.subscribe((value) => {
      console.log(`value change: ${JSON.stringify(value)}`);
    });
  }
}
