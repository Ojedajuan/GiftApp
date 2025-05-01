import { Component } from '@angular/core';
import { BusquedaComponent } from "../busqueda/busqueda.component";
import { ResultadosComponent } from "../resultados/resultados.component";

@Component({
  selector: 'app-gifs-page',
  imports: [BusquedaComponent, ResultadosComponent],
  templateUrl: './gifs-page.component.html',

})
export class GifsPageComponent {

}
