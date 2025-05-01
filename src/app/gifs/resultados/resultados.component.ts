import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

    get resultados() {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) {}


  get historial() {
    return this.gifsService.historial;
  }
}
