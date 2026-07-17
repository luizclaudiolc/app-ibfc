import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ENiveisAcesso } from '../../models/consts';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  isAdmin = signal<boolean>(false);
  podeAcessarEscalas = signal<boolean>(false);

  ngOnInit(): void {
    const nivel = localStorage.getItem('user_nivel');
    const setor = localStorage.getItem('user_setor');

    this.isAdmin.set(nivel === ENiveisAcesso.Admin);

    const isLider = setor && setor !== 'null' && setor !== 'undefined' && setor !== 'membro';

    this.podeAcessarEscalas.set(this.isAdmin() || !!isLider);
  }
}
