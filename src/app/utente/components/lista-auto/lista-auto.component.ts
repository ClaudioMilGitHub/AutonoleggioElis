import {Component, OnDestroy, OnInit} from '@angular/core';
import {Automobile} from "../../../shared/models/Automobile";
import {Subscription} from "rxjs";
import {AutoService} from "../../../shared/services/auto.service";

@Component({
  selector: 'app-lista-auto',
  templateUrl: './lista-auto.component.html',
  styleUrls: ['./lista-auto.component.css']
})
export class ListaAutoComponent implements OnInit, OnDestroy {
  automobili: Automobile[] = [];
  autoSub: Subscription;

  constructor(private autoService: AutoService) {
  }

  ngOnInit() {
    this.autoSub = this.autoService.findAll().subscribe({
      next: (automobili) => {
        this.automobili = automobili;
      }
    })
  }

  ngOnDestroy() {
    this.autoSub?.unsubscribe();
  }

}
