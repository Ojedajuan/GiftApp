// side-bar.component.ts
import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class SideBarComponent {
  get historial() {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) {} // Imported GifsService

  buscar(termino: string) {
    this.gifsService.buscarGifs(termino);
  }
}