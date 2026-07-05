import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = environment.apiUrl;

  private http = inject(HttpClient);

  /**
   * Método genérico para fazer requisições POST para a API do Apps Script.
   * @param acao Nome da ação que o backend (doPost) deve executar.
   * @param payload Objeto contendo os dados extras necessários (opcional).
   */
  post<T>(acao: string, payload: any = {}): Observable<T> {
    const pacote = {
      acao: acao,
      ...payload,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'text/plain;charset=utf-8',
    });

    return this.http.post<T>(this.apiUrl, JSON.stringify(pacote), { headers });
  }
}
