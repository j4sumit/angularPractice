import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { User2ListComponent } from './user2-list/user2-list.component';
import { User3ListComponent } from './user3-list/user3-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    User2ListComponent,
    User3ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
