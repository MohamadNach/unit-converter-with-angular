import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ConverterUiComponent } from './converter-ui/converter-ui.component';
import { CategoryComponent } from './converter-ui/category/category.component';
import { CategoryIconComponent } from './converter-ui/category-icon/category-icon.component';
import { ConversionInputComponent } from './converter-ui/conversion-input/conversion-input.component';
import { ConversionOutputComponent } from './converter-ui/conversion-output/conversion-output.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConverterComponent } from './converter-ui/converter/converter.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ConverterUiComponent,
    CategoryComponent,
    ConverterUiComponent,
    CategoryIconComponent,
    ConversionInputComponent,
    ConversionOutputComponent,
    AppInfoComponent,
    ConverterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
