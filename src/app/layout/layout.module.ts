import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class LayoutModule {

}
