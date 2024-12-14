import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavComponent } from './components/nav/nav.component';
import {AuthRoutingModule} from "../auth/auth-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ListaAutoDisponibiliComponent} from "./components/lista-auto-disponibili/lista-auto-disponibili.component";
import {ListaAutoItemComponent} from "./components/lista-auto-item/lista-auto-item.component";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    HomepageComponent,
    NavComponent,
    ListaAutoDisponibiliComponent,
    ListaAutoItemComponent
  ],
  exports: [
    NavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AuthRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ]
})
export class SharedModule { }
