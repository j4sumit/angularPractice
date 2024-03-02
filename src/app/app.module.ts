import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {MatButtonModule} from '@angular/material/button'
import {MatBadgeModule} from '@angular/material/badge';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
