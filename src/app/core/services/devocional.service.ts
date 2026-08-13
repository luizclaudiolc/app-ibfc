import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { referencias } from '../../shared/models/versiculos';

export interface VersiculoDia {
  texto: string;
  referencia: string;
}

@Injectable({ providedIn: 'root' })
export class DevocionalService {
  private http = inject(HttpClient);

  private referenciasCuradas = referencias;

  obterVersiculoDoDia(): Observable<VersiculoDia> {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth() + 1;
    const dia = hoje.getDate();

    const dataString = `${ano}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;

    const cache = localStorage.getItem('versiculo_dia');
    if (cache) {
      const parsed = JSON.parse(cache);
      if (parsed.data === dataString) {
        return of({ texto: parsed.texto, referencia: parsed.referencia });
      }
    }

    const semente = ano * 10000 + mes * 100 + dia;
    const indice = semente % this.referenciasCuradas.length;
    const ref = this.referenciasCuradas[indice];

    const url = `https://bible-api.com/${ref}?translation=almeida`;

    return this.http.get<any>(url).pipe(
      map((res) => ({
        texto: res.text.replace(/\n/g, ' ').trim(),
        referencia: res.reference,
      })),
      tap((versiculo) => {
        localStorage.setItem(
          'versiculo_dia',
          JSON.stringify({
            data: dataString,
            texto: versiculo.texto,
            referencia: versiculo.referencia,
          }),
        );
      }),
      catchError(() => {
        return of({
          texto: 'O Senhor é o meu pastor; nada me faltará.',
          referencia: 'Salmos 23:1',
        });
      }),
    );
  }
}
