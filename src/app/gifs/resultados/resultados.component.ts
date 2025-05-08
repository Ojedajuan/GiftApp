import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../services/gifs.service';

// Asegúrate de importar la interfaz Gif
import { Gif } from '../interfaces/gifsInterfaces';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  selectedGif: Gif | null = null;

  constructor(private gifsService: GifsService) {}

  get resultados() {
    return this.gifsService.resultados;
  }

  get historial() {
    return this.gifsService.historial;
  }

  mostrarGifEnModal(gif: Gif) {
    this.selectedGif = gif;
  }

  cerrarModal() {
    this.selectedGif = null;
  }
  copiarUrl(url: string | undefined) {
    if (url) {
      navigator.clipboard.writeText(url);
      alert('URL copiada al portapapeles');
    }
  }



}