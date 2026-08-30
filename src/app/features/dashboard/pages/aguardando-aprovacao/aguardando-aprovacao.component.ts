import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../../core/modules/material.module';
import { VersiculoCardComponent } from '../../../../shared/components/card-versiculo/card-versiculo.component';
import { AuthService } from '../../../../core/services/auth.service';
import { DevocionalService, VersiculoDia } from '../../../../core/services/devocional.service';
import { EStatusMembro } from '../../../../shared/models/consts';

@Component({
  selector: 'app-aguardando',
  standalone: true,
  imports: [CommonModule, MaterialModule, VersiculoCardComponent],
  templateUrl: './aguardando-aprovacao.component.html',
})
export class AguardandoAprovacaoComponent implements OnInit {
  private authService = inject(AuthService);
  private devocionalService = inject(DevocionalService);
  private router = inject(Router);

  nomeUsuario = this.authService.nomeUsuario$;
  versiculoDiario = signal<VersiculoDia | null>(null);
  carregando = signal(true);

  async ngOnInit() {
    this.carregando.set(true);

    const status = await this.authService.verificarEAtualizarStatus();

    if (status === EStatusMembro.ATIVO) {
      this.router.navigate(['/dashboard/home']);
      return;
    }

    if (status === EStatusMembro.INATIVO) {
      await this.authService.logout();
      return;
    }

    this.devocionalService.obterVersiculoDoDia().subscribe({
      next: (versiculo) => {
        this.versiculoDiario.set(versiculo);
        this.carregando.set(false);
      },
      error: () => this.carregando.set(false),
    });
  }

  sair() {
    this.authService.logout();
  }
}
