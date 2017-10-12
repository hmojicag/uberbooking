import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarUtilsModule } from '../calendar-utils/module';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './home/app.home.component';
import { AppRoutingModule } from './AppRoutingModule';
import { AppNavbarComponent } from './nav-bar/app.navbar.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppEventsComponent } from './events/app.events.component';
import { EventService } from './events/event.service';
import { HttpModule } from '@angular/http';
import { LogService } from './log.service';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiHttpCallerService } from './api-http-caller.service';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppNavbarComponent,
    AppFooterComponent,
    AppEventsComponent
  ],
  imports: [
    CalendarUtilsModule,
    CommonModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [EventService, LogService, ApiHttpCallerService, LoginService],
  bootstrap: [AppComponent],

})
export class AppModule { }
