import {Component, Input} from '@angular/core';
import {Automobile} from "../../models/Automobile";

@Component({
  selector: 'app-lista-auto-item',
  templateUrl: './lista-auto-item.component.html',
  styleUrls: ['./lista-auto-item.component.css']
})
export class ListaAutoItemComponent {
    @Input() automobile: Automobile;
    show: boolean;

}
