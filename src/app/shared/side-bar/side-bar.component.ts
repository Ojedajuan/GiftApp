import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { CommonModule } from '@angular/common';
import { GifsModule } from '../../gifs/gifs.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  standalone: true, // Si estás usando componentes standalone
  imports: [CommonModule, GifsModule]
})
export class SidebarComponent {

  get historial() {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) { }

  buscar(termino: string) {
    this.gifsService.buscarGifs(termino);
  }
  
  clearHistorial() {
    this.gifsService.deleteHistorial();
  }
  
  // Para dispositivos móviles
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar?.classList.toggle('collapsed');
  }
}