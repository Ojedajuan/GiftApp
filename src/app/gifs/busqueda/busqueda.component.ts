import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  imports: [],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
@ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor( private gifsService:GifsService ) { }
  buscarGifs() {
    const valor= this.txtBuscar.nativeElement.value;
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }


}
