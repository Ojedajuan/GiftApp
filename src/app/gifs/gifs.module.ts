import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [],
  imports: [GifsPageComponent,ResultadosComponent, BusquedaComponent, CommonModule], // Import the GifsPageComponent to make it available in this module
  exports: [GifsPageComponent], // Export the GifsPageComponent so it can be used in other modules
})
export class GifsModule { }
