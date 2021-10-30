import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaleFormulaComponent } from './male-formula/male-formula.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleComponent } from './sample/sample.component';
import { BMRNotesComponent } from './bmr-notes/bmr-notes.component';
import { BmiTableComponent } from './bmi-table/bmi-table.component';
import { uomConversionService } from '../services/uom-conversion-service';
import { CalculationService } from '../services/calculation-service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BmrResultsComponent } from './bmr-results/bmr-results.component';
import { CommonModule } from '@angular/common';
import { BfiTableComponent } from './bfi-table/bfi-table.component';
import { HeartRateGridComponent } from './heart-rate-grid/heart-rate-grid.component';
import { FemaleFormulaComponent } from './female-formula/female-formula.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MaleFormulaComponent,
    DashboardComponent,
    SampleComponent,
    BMRNotesComponent,
    BmiTableComponent,
    BmrResultsComponent,
    BfiTableComponent,
    HeartRateGridComponent,
    FemaleFormulaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    uomConversionService,
    CalculationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
