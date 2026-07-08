import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ENiveisAcesso } from '../../models/consts';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  abaAtiva = signal<string>('feed');
  isAdmin = signal<boolean>(false);

  private router = inject(Router);

  ngOnInit(): void {
    this.isAdmin.set(localStorage.getItem('user_nivel') === ENiveisAcesso.Admin);
    if (this.router.url.includes('admin')) this.abaAtiva.set('admin');
  }

  mudarAba(aba: string): void {
    this.abaAtiva.set(aba);
    this.router.navigate([`/dashboard/${aba === 'admin' ? 'admin' : 'home'}`]);
  }
}
