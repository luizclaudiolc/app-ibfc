import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface EnderecoViaCep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private http = inject(HttpClient);

  /**
   * Consulta um CEP na API pública do ViaCEP.
   * @param cep CEP em formato de string (com ou sem máscara)
   */
  buscarCep(cep: string): Observable<EnderecoViaCep | null> {
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      return of(null);
    }

    return this.http.get<EnderecoViaCep>(`https://viacep.com.br/ws/${cepLimpo}/json/`);
  }
}
