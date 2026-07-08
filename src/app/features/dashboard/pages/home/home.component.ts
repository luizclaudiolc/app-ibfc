import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvisoService } from '../../../../core/services/aviso.service';
import { EscalaService } from '../../../../core/services/escala.service';
import { Aviso } from '../../../../shared/models/aviso.model';
import { Escala } from '../../../../shared/models/escala.model';
import { Membro } from '../../../../shared/models/membro.model';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { MembroService } from '../../../../core/services/membro.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../core/modules/material.module';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private avisoService = inject(AvisoService);
  private escalaService = inject(EscalaService);
  private membroService = inject(MembroService);
  private router = inject(Router);

  nomeUsuario = signal<string>(localStorage.getItem('user_nome') || 'Irmão(ã)');
  emailUsuario = signal<string>(localStorage.getItem('user_email') || '');
  fotoUsuario = signal<string>(localStorage.getItem('user_foto') || '');
  carregando = signal<boolean>(true);

  avisos = signal<Aviso[]>([]);
  escalas = signal<Escala[]>([]);
  membrosRaw = signal<Membro[]>([]);

  termoBusca = signal<string>('');

  escalaPessoal = computed(() => {
    const email = this.emailUsuario().toLowerCase();
    const nome = this.nomeUsuario().toLowerCase();

    return this.escalas().find(({ voluntarios }) => {
      const vol = voluntarios.toLowerCase() || '';
      return vol.includes(nome) || vol.includes(email);
    });
  });

  membrosFiltrados = computed(() => {
    const busca = this.termoBusca().toLowerCase().trim();
    const lista = this.membrosRaw();
    console.log({ lista });

    if (!busca) return lista;

    return lista.filter(({ nome, sobrenome }) => {
      const nomeCompleto = `${nome} ${sobrenome}`.toLowerCase();
      return nomeCompleto.includes(busca);
    });
  });

  ngOnInit(): void {
    this.carregarTodosOsDados();

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.carregarTodosOsDados();
    });
  }

  carregarTodosOsDados(): void {
    this.carregando.set(true);

    this.avisoService.buscarTodos().subscribe({
      next: (dados) => this.avisos.set(dados),
      error: (err) => console.error('Erro ao buscar avisos', err),
    });

    this.escalaService.buscarTodas().subscribe({
      next: (dados) => this.escalas.set(dados),
      error: (err) => console.error('Erro ao buscar escalas', err),
    });

    this.membroService.buscarTodos().subscribe({
      next: (dados) => {
        this.membrosRaw.set(dados);
        this.carregando.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar membros', err);
        this.carregando.set(false);
      },
    });
  }

  converterVoluntarios(lista: string): string[] {
    return lista ? lista.split(',').map((n) => n.trim()) : [];
  }
}
