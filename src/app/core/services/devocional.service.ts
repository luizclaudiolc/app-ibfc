import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { referencias } from '../../shared/models/versiculos';
import { AuthService } from './auth.service';

export interface VersiculoDia {
  texto: string;
  referencia: string;
}

@Injectable({ providedIn: 'root' })
export class DevocionalService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  private referenciasCuradas = referencias;

  obterVersiculoDoDia(): Observable<VersiculoDia> {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth() + 1;
    const dia = hoje.getDate();

    const dataString = `${ano}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;

    const cache = this.authService.obterVersiculoEmCache();
    if (cache && cache.data === dataString) {
      return of({ texto: cache.texto, referencia: cache.referencia });
    }

    const semente = ano * 10000 + mes * 100 + dia;
    const indice = semente % this.referenciasCuradas.length;
    const ref = this.referenciasCuradas[indice];

    const url = this.urlBiblia(ref);

    return this.http.get<any>(url).pipe(
      map((res) => ({
        texto: String(res.data.text).replace(/\n/g, ' ').trim(),
        referencia: ref,
      })),
      tap((versiculo) => {
        this.authService.salvarVersiculoEmCache({
          data: dataString,
          texto: versiculo.texto,
          referencia: versiculo.referencia,
        });
      }),
      catchError(() => {
        return of({
          texto: 'O Senhor é o meu pastor; nada me faltará.',
          referencia: 'Salmos 23:1',
        });
      }),
    );
  }

  private urlBiblia(refPt: string): string {
    const m = refPt.trim().match(/^(.+?)\s+(\d+):(\d+(?:-\d+)?)$/);
    if (!m) throw new Error(`Referência inválida: ${refPt}`);

    const livro = m[1]
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-');

    return `https://api.midvash.com/v1/almeida-livre/${livro}/${m[2]}/${m[3]}`;
  }
}
