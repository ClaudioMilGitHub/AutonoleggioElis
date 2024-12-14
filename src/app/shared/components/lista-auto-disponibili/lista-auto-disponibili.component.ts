import {Component, OnInit} from '@angular/core';
import {Automobile} from "../../models/Automobile";
import {Subscription} from "rxjs";
import {AutoService} from "../../services/auto.service";
import {DisponibilitaRequest} from "../../models/DisponibilitaRequest";

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
    const body: DisponibilitaRequest = {
      dataInizio: "2024-12-15",
      dataFine: "2024-12-20",
    }
    this.autoSub = this.autoService.findDisponibilita(body).subscribe({
      next: (automobili) => {
        this.automobili = automobili;
      }
    })
  }

}
