import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, forkJoin, finalize } from 'rxjs';

import { AvisoService } from '../../../../core/services/aviso.service';
import { EscalaService } from '../../../../core/services/escala.service';
import { MembroService } from '../../../../core/services/membro.service';

import { Aviso } from '../../../../shared/models/aviso.model';
import { Escala } from '../../../../shared/models/escala.model';
import { Membro } from '../../../../shared/models/membro.model';

import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { MaterialModule } from '../../../../core/modules/material.module';

import {
  CARGOS_DISPONIVEIS_MAP,
  DEPARTAMENTOS_DISPONIVEIS_MAP,
  EVENTOS_MAP,
} from '../../../../shared/models/consts';

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

  departamentos = DEPARTAMENTOS_DISPONIVEIS_MAP;
  departamentosMap = DEPARTAMENTOS_DISPONIVEIS_MAP;
  cargosDisponiveis = CARGOS_DISPONIVEIS_MAP;
  eventosMap = EVENTOS_MAP;

  escalaPessoal = computed(() => {
    const email = this.emailUsuario().toLowerCase();
    const nome = this.nomeUsuario().toLowerCase();
    const hoje = new Date().toISOString().split('T')[0];

    const escalasFuturas = this.escalas()
      .filter((e) => e.data_escala >= hoje)
      .sort((a, b) => a.data_escala.localeCompare(b.data_escala));

    const escala = escalasFuturas.find(({ voluntarios }) => {
      const vol = (voluntarios || '').toLowerCase();
      return vol.includes(nome) || vol.includes(email);
    });

    if (!escala) return null;

    const [ano, mes, dia] = escala.data_escala.split('-');

    return {
      ...escala,
      data: `${dia}/${mes}/${ano}`,
    };
  });

  membrosFiltrados = computed(() => {
    const removerAcentos = (texto: string) => {
      return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    const termoOriginal = this.termoBusca().toLowerCase().trim();
    const busca = removerAcentos(termoOriginal);

    const lista = this.membrosRaw();

    if (!busca) return lista;

    return lista.filter(({ nome, sobrenome, setor_responsavel, cargo }) => {
      const nomeCompleto = removerAcentos(`${nome} ${sobrenome}`.toLowerCase());
      const setorRaw = setor_responsavel ? this.departamentos[setor_responsavel] : '';
      const setor = removerAcentos(setorRaw.toLowerCase());
      const cargoLower = removerAcentos((cargo || '').toLowerCase());

      return nomeCompleto.includes(busca) || setor.includes(busca) || cargoLower.includes(busca);
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

    forkJoin({
      avisos: this.avisoService.buscarTodos(),
      escalas: this.escalaService.buscarTodas(),
      membros: this.membroService.buscarTodos(),
    })
      .pipe(finalize(() => this.carregando.set(false)))
      .subscribe({
        next: (resultados) => {
          this.avisos.set(resultados.avisos);
          this.escalas.set(resultados.escalas);
          this.membrosRaw.set(resultados.membros);
        },
        error: (err) => {
          console.error('Erro ao carregar os dados do Dashboard', err);
        },
      });
  }

  converterVoluntarios(lista: string): string[] {
    return lista ? lista.split(',').map((n) => n.trim()) : [];
  }
}
