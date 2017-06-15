import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from 'ui-router-ng2';


import { STATES } from './account.routes';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    UIRouterModule.forChild({
      states: STATES,
    }),


  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    SettingsComponent,
  ],
})
export class AccountModule {}
