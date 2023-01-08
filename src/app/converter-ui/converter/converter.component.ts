import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionDef } from 'src/app/shared/conversion-def.class';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  conversionDefs!: ConversionDef[];

  constructor(private conversionService: ConversionEngineService) {}

  ngOnInit(): void {
    this.conversionDefs = this.conversionService.getCurrentConversions();

    this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      this.conversionService.setCategoryIndex(value);
      this.conversionDefs = this.conversionService.getCurrentConversions();
    });
  }
}
