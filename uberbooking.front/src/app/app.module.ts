import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './home/app.home.component';
import { AppRoutingModule } from './AppRoutingModule';
import { AppNavbarComponent } from './nav-bar/app.navbar.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppEventsComponent } from './events/app.events.component';
import { EventService } from './events/event.service';
import { HttpModule } from '@angular/http';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppNavbarComponent,
    AppFooterComponent,
    AppEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [EventService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
