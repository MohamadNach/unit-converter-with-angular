import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';
import { ConverterCategoryDef } from 'src/app/shared/converter-def.class';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.css'],
})
export class CategoryIconComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  converterCategoriesDef!: ConverterCategoryDef;

  constructor(private conversionService: ConversionEngineService) {}

  ngOnInit(): void {
    let value = '';
    this.converterCategoriesDef =
      this.conversionService.getConverterCategory(value);
    value = this.converterCategoriesDef.name;
    this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      console.log(`CategoryComponent ${value}`);
      this.converterCategoriesDef =
        this.conversionService.getConverterCategory(value);
    });
  }
}
