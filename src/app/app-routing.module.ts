import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./shared/components/homepage/homepage.component";
import {UtenteWrapperComponent} from "./utente/components/utente-wrapper/utente-wrapper.component";
import {authGuard} from "./Guards/AuthGuards";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomepageComponent},
  {path: 'utente', component: UtenteWrapperComponent, canActivate: [authGuard], loadChildren: () => import('./utente/utente.module').then(m => m.UtenteModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
