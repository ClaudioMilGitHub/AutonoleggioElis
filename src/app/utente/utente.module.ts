import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtenteRoutingModule } from './utente-routing.module';
import { UtenteWrapperComponent } from './components/utente-wrapper/utente-wrapper.component';

import { DashBoardUtenteComponent } from './components/dash-board-utente/dash-board-utente.component';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import { NoleggiComponent } from './components/noleggi/noleggi.component';
import {SharedModule} from "../shared/shared.module";
import {ListaAutoComponent} from "./components/lista-auto/lista-auto.component";


@NgModule({
  declarations: [
    UtenteWrapperComponent,
    DashBoardUtenteComponent,
    NoleggiComponent,
    ListaAutoComponent
  ],
  imports: [
    CommonModule,
    UtenteRoutingModule,
    SharedModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class UtenteModule { }
