import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../../../core/modules/material.module';
import { MembroService } from '../../../../core/services/membro.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { SelecionarLiderDialogComponent } from './selecionar-lider-dialog/selecionar-lider-dialog';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, MaterialModule, HeaderComponent, FooterComponent],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'email', 'setor', 'acoes'];
  dataSource = new MatTableDataSource<any>([]);
  nomeUsuario = signal<string>(localStorage.getItem('user_nome') || 'Admin');
  fotoUsuario = signal<string>(localStorage.getItem('user_foto') || '');

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private membroService: MembroService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {}

  abrirModalLideranca() {
    this.dialog.open(SelecionarLiderDialogComponent, {
      width: '400px',
    });
  }
}
