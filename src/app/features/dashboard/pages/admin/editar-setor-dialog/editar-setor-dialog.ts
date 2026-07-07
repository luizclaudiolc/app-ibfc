import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../../core/modules/material.module';
import { MembroService } from '../../../../../core/services/membro.service';

@Component({
  selector: 'app-editar-setor-dialog',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  template: `
    <h2 mat-dialog-title>Delegar Setor</h2>
    <mat-dialog-content>
      <p>
        Membro: <strong>{{ data.nome }} {{ data.sobrenome }}</strong>
      </p>
      <mat-form-field class="w-full mt-4">
        <mat-label>Novo Setor</mat-label>
        <mat-select [(ngModel)]="novoSetor">
          <mat-option value="Ministerio de Louvor">Ministério de Louvor</mat-option>
          <mat-option value="Recepcao">Recepção</mat-option>
          <mat-option value="Midia">Mídia</mat-option>
          <mat-option value="Infantil">Infantil</mat-option>
          <mat-option value="Sem Setor">Sem Setor</mat-option>
        </mat-select>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="primary" (click)="salvar()">Salvar</button>
    </mat-dialog-actions>
  `,
})
export class EditarSetorDialogComponent {
  novoSetor: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditarSetorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private membroService: MembroService,
  ) {}

  ngOnInit() {
    this.novoSetor = this.data.setor_responsavel || '';
  }

  salvar() {
    this.membroService.atualizarSetor(this.data.id, this.novoSetor).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
