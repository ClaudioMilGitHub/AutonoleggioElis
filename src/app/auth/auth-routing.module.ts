import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrazioneComponent} from "./components/registrazione/registrazione.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registra', component: RegistrazioneComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
