import {Component, OnInit} from '@angular/core';
import {Automobile} from "../../models/Automobile";
import {Subscription} from "rxjs";
import {AutoService} from "../../services/auto.service";

@Component({
  selector: 'app-lista-auto-disponibili',
  templateUrl: './lista-auto-disponibili.component.html',
  styleUrls: ['./lista-auto-disponibili.component.css']
})
export class ListaAutoDisponibiliComponent implements OnInit{

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

}
