import { Component, OnInit, inject, signal } from '@angular/core';
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

  ngOnInit(): void {
    this.isAdmin.set(localStorage.getItem('user_nivel') === ENiveisAcesso.Admin);
  }
}
