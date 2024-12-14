import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtenteRoutingModule } from './utente-routing.module';
import { UtenteWrapperComponent } from './components/utente-wrapper/utente-wrapper.component';
import {SharedModule} from "../shared/shared.module";
import { DashBoardUtenteComponent } from './components/dash-board-utente/dash-board-utente.component';
import { ListaAutoComponent } from './components/lista-auto/lista-auto.component';
import { ListaAutoItemComponent } from '../shared/components/lista-auto-item/lista-auto-item.component';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import { NoleggiComponent } from './components/noleggi/noleggi.component';


@NgModule({
  declarations: [
    UtenteWrapperComponent,
    DashBoardUtenteComponent,
    ListaAutoComponent,
    ListaAutoItemComponent,
    NoleggiComponent
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
