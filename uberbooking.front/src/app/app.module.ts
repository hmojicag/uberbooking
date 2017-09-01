import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './home/app.home.component';
import { AppRoutingModule } from './AppRoutingModule';
import { AppNavbarComponent } from './nav-bar/app.navbar.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppBlockComponent } from './block/app.block.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppNavbarComponent,
    AppFooterComponent,
    AppBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
