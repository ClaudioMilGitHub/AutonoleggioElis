import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LoginComponent,
    RegistrazioneComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ]
})
export class AuthModule { }
