import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CalculationService } from '../services/calculation-service';
import { GetBaconService } from '../services/get-bacon-service';
import { uomConversionService } from '../services/uom-conversion-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BfiTableComponent } from './bfi-table/bfi-table.component';
import { BmiTableComponent } from './bmi-table/bmi-table.component';
import { BmrResultsComponent } from './bmr-results/bmr-results.component';
import { CallFromServerComponent } from './call-from-server/call-from-server.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FemaleFormulaComponent } from './female-formula/female-formula.component';
import { HeartRateGridComponent } from './heart-rate-grid/heart-rate-grid.component';
import { LayoutModule } from './layout/layout.module';
import { MaleFormulaComponent } from './male-formula/male-formula.component';
import { SampleComponent } from './sample/sample.component';
import { SharePageComponent } from './share-page/share-page.component';
import { VideoTestComponent } from './video-test/video-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MaleFormulaComponent,
    DashboardComponent,
    SampleComponent,
    BmiTableComponent,
    BmrResultsComponent,
    BfiTableComponent,
    HeartRateGridComponent,
    FemaleFormulaComponent,
    CallFromServerComponent,
    SharePageComponent,
    VideoTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatIconModule,
    ClipboardModule,
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
    CalculationService,
    GetBaconService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
