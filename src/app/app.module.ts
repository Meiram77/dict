import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentComponent } from './departament/departament.component';
import { RegionComponent } from './region/region.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DepartamentComponent,
    RegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule   //для использования параметра [(ngModel)]="name"
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
