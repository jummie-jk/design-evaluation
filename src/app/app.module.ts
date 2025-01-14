import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicePageComponent } from './pages/device-page/device-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnectPageComponent } from './pages/connect-page/connect-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicePageComponent,
    SettingsPageComponent,
    NavbarComponent,
    ConnectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
