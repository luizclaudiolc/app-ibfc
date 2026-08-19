import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/modules/material.module';
import { DialogLayoutComponent } from '../../../../shared/components/layout-modal/dialog-layout.component';
import { MidiaService } from '../../../../core/services/midia.service';
import { NotificationService } from '../../../../core/services/notifications.service';

@Component({
  selector: 'app-midia-form-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, DialogLayoutComponent],
  templateUrl: './midia-form-dialog.component.html',
})
export class MidiaFormDialogComponent implements OnInit {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<MidiaFormDialogComponent>);
  private midiaService = inject(MidiaService);
  private notification = inject(NotificationService);

  buscandoDados = false;
  thumbnailPrevia: string | null = null;
  youtubeIdCache: string | null = null;

  form = this.fb.nonNullable.group({
    url: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
    titulo: ['', Validators.required],
    descricao: [''],
  });

  ngOnInit() {
    this.form.controls.url.valueChanges.subscribe((url) => {
      if (url && this.form.controls.url.valid) {
        this.processarLink(url);
      }
    });
  }

  async processarLink(url: string) {
    const id = this.midiaService.extrairYoutubeId(url);

    if (!id || id === this.youtubeIdCache) return;

    try {
      this.buscandoDados = true;
      this.youtubeIdCache = id;
      this.notification.aviso('Buscando informações do vídeo...', 1500);

      const detalhes = await this.midiaService.buscarDetalhesDoVideo(id);

      this.form.patchValue({
        titulo: detalhes.titulo,
        descricao: detalhes.descricao,
      });

      this.thumbnailPrevia = detalhes.thumbnail;
    } catch (error) {
      console.error(error);
      this.notification.erro(
        'Não foi possível carregar os dados automaticamente. Preencha manualmente.',
      );
    } finally {
      this.buscandoDados = false;
    }
  }

  confirmar() {
    if (this.form.invalid || !this.youtubeIdCache || !this.thumbnailPrevia) {
      this.form.markAllAsTouched();
      return;
    }

    const { titulo, descricao } = this.form.getRawValue();

    this.dialogRef.close({
      youtube_id: this.youtubeIdCache,
      titulo: titulo,
      descricao: descricao,
      thumbnail_url: this.thumbnailPrevia,
    });
  }
}
