import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicePageComponent } from './pages/device-page/device-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ConnectPageComponent } from './pages/connect-page/connect-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'device', pathMatch: 'full' },
  { path: 'device', component: DevicePageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'connect', component: ConnectPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
