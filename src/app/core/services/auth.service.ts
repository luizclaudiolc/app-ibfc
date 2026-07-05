import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { UsuarioLogado } from '../../shared/models/membro.model';

interface RespostaLogin {
  sucesso: boolean;
  usuario?: UsuarioLogado;
  mensagem?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiService = inject(ApiService);

  login(email: string, senha: string): Observable<RespostaLogin> {
    return this.apiService.post<RespostaLogin>('login', { email, senha });
  }
}
