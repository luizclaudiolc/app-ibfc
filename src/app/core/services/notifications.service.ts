import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../../shared/components/custom-snackbar/custom-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private snackBar = inject(MatSnackBar);

  sucesso(mensagem: string, duracao = 4000): void {
    this.mostrar(mensagem, 'sucesso', duracao);
  }

  erro(mensagem: string, duracao = 5000): void {
    this.mostrar(mensagem, 'erro', duracao);
  }

  aviso(mensagem: string, duracao = 4000): void {
    this.mostrar(mensagem, 'aviso', duracao);
  }

  private mostrar(mensagem: string, tipo: 'sucesso' | 'erro' | 'aviso', duracao: number): void {
    this.snackBar.openFromComponent(CustomSnackbarComponent, {
      data: { mensagem, tipo },
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar-container'],
    });
  }
}
