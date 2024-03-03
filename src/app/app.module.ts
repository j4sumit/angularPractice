import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {MatButtonModule} from '@angular/material/button'
import {MatBadgeModule} from '@angular/material/badge';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';



@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AdminlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule,
    MatBadgeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
