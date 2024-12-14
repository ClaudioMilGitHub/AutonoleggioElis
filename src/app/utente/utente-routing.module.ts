import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashBoardUtenteComponent} from "./components/dash-board-utente/dash-board-utente.component";
import {ListaAutoComponent} from "./components/lista-auto/lista-auto.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboardUtente', pathMatch: 'full'},
  {path: 'dashboardUtente', component: DashBoardUtenteComponent},
  {path: 'auto', component: ListaAutoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtenteRoutingModule { }
