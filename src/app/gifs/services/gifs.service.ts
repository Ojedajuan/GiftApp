import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Gif, SearchGifsResponse } from '../interfaces/gifsInterfaces';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apikey    : string = '2ZgNyB4d4GkpGTqvxFaRo5YH0BKIZmXZ';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'; // Eliminé la barra final
  // Historial de búsquedas
  private _historial: string[] = [];
  public resultados : Gif[] = [];

  // Variable para verificar si estamos en el navegador
  private isBrowser: boolean;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Solo acceder a localStorage si estamos en el navegador
    if (this.isBrowser) {
      this._historial = JSON.parse(localStorage.getItem('historial') || '[]');
      this.resultados = JSON.parse(localStorage.getItem('resultados') || '[]');
    }
  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();

    // Si el query está vacío, no hacer nada
    if (query.length === 0) return;

    // Configurar parámetros
    let params = new HttpParams()
      .set('api_key', this.apikey)
      .set('q', query)
      .set('limit', '15');

    // Agregar el query al historial si no existe
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10); // Mantener solo los últimos 10 elementos

      // Guardar en localStorage solo si estamos en el navegador
      if (this.isBrowser) {
        localStorage.setItem('historial', JSON.stringify(this._historial));
      }
    }
    
    // Realizar la petición HTTP para buscar GIFs
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .pipe(
        tap(console.log), // Para depuración
        catchError(this.handleError)
      )
      .subscribe((resp) => {
        this.resultados = resp.data;

        // Guardar en localStorage solo si estamos en el navegador
        if (this.isBrowser) {
          localStorage.setItem('resultados', JSON.stringify(this.resultados));
        }
      });
  }

  // Manejador de errores
  private handleError(error: HttpErrorResponse) {
    console.error('Error en la API de Giphy:', error);
    
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Error del cliente:', error.error.message);
    } else {
      // El backend devolvió un código de error
      console.error(
        `Código de error: ${error.status}, ` +
        `Cuerpo del error: ${JSON.stringify(error.error)}`
      );
    }
    
    // Devuelve un observable con un mensaje de error
    return throwError('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');
  }
}