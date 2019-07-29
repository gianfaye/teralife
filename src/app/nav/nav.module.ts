//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';
//import { MatCheckboxModule } from '@angular/material/checkbox';
//import { NavComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [ NavComponent ]
})
export class NavModule { 

}
