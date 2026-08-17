import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/modules/material.module';
import { VersiculoCardComponent } from '../../../../shared/components/card-versiculo/card-versiculo.component';
import { AuthService } from '../../../../core/services/auth.service';
import { DevocionalService, VersiculoDia } from '../../../../core/services/devocional.service';

@Component({
  selector: 'app-aguardando',
  standalone: true,
  imports: [CommonModule, MaterialModule, VersiculoCardComponent],
  templateUrl: './aguardando-aprovacao.component.html',
})
export class AguardandoAprovacaoComponent implements OnInit {
  private authService = inject(AuthService);
  private devocionalService = inject(DevocionalService);

  nomeUsuario = this.authService.nomeUsuario$;
  versiculoDiario = signal<VersiculoDia | null>(null);
  carregando = signal(true);

  ngOnInit() {
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
