import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {
  private apiUrl = 'http://localhost:3000/videojuegos'; // cambiar url a futuro

  constructor(private httpClient: HttpClient) {}

  obtenerVideojuegos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  obtenerVideojuegoPorId(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<any>(url);
  }

}
