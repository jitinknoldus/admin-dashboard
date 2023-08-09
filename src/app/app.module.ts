import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ImageUiComponentComponent } from './home/dashboard/image-ui-component/image-ui-component.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ImageUiComponentComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        FormsModule,
        BrowserAnimationsModule,
        MatTableModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
