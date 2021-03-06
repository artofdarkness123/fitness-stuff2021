import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallFromServerComponent } from './call-from-server/call-from-server.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FemaleFormulaComponent } from './female-formula/female-formula.component';
import { MaleFormulaComponent } from './male-formula/male-formula.component';
import { SampleComponent } from './sample/sample.component';
import { SharePageComponent } from './share-page/share-page.component';
import { VideoTestComponent } from './video-test/video-test.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'sample',
    component: SampleComponent
  },
  {
    path: 'male-formula',
    component: MaleFormulaComponent
  },
  {
    path: 'female-formula',
    component: FemaleFormulaComponent
  },
  {
    path: 'call-from-server',
    component: CallFromServerComponent
  },
  {
    path: 'share-page',
    component: SharePageComponent
  },
  {
    path: 'video-test',
    component: VideoTestComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
