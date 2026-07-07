import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../core/modules/material.module';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';
import { MembroService } from '../../../../../core/services/membro.service';
import { EditarSetorDialogComponent } from '../editar-setor-dialog/editar-setor-dialog';

@Component({
  selector: 'app-membros-gestao',
  standalone: true,
  imports: [MaterialModule, HeaderComponent],
  templateUrl: './membros-gestao.html',
})
export class MembrosGestaoComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'setor', 'acoes'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private membroService: MembroService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.carregarMembros();
  }

  carregarMembros() {
    this.membroService.buscarTodos().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  aplicarFiltro(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.dataSource.filter = val.trim().toLowerCase();
  }

  abrirEdicao(membro: any) {
    this.dialog
      .open(EditarSetorDialogComponent, {
        data: membro,
        width: '350px',
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this.carregarMembros();
      });
  }
}
