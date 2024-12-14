import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {RouterModule} from "@angular/router";
import {UtenteNonRegistratoModule} from "./utente-non-registrato/utente-non-registrato.module";
import {UtenteModule} from "./utente/utente.module";
import {AuthModule} from "./auth/auth.module";
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UtenteNonRegistratoModule,
    UtenteModule,
    AuthModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Durata della notifica in millisecondi
      positionClass: 'toast-top-right', // Posizione della notifica
      preventDuplicates: true, // Evita notifiche duplicate
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
