//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
//import { MatCheckboxModule } from '@angular/material/checkbox';
//import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { 

}
