import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../../../core/modules/material.module';
import { Midia } from '../../models/midia.model';

@Component({
  selector: 'app-video-player-modal',
  standalone: true,
  imports: [CommonModule, MaterialModule, MatDialogModule],
  template: `
    <div
      class="bg-slate-900 w-full h-full flex flex-col relative rounded-3xl overflow-hidden shadow-2xl"
    >
      <div class="flex justify-end p-3 absolute top-0 right-0 z-20">
        <button
          mat-dialog-close
          class="w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
        >
          <mat-icon class="!w-5 !h-5 !text-[20px]">close</mat-icon>
        </button>
      </div>

      <div class="relative w-full pt-[56.25%] bg-black">
        <iframe
          [src]="urlSegura"
          class="absolute top-0 left-0 w-full h-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="p-5 text-white space-y-2 max-h-48 overflow-y-auto no-scrollbar">
        <h2 class="font-extrabold text-base sm:text-lg leading-snug tracking-tight">
          {{ data.titulo }}
        </h2>
        @if (data.descricao) {
          <p
            class="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed whitespace-pre-line"
          >
            {{ data.descricao }}
          </p>
        }
      </div>
    </div>
  `,
})
export class VideoPlayerModalComponent implements OnInit {
  public data: Midia = inject(MAT_DIALOG_DATA);
  private sanitizer = inject(DomSanitizer);

  urlSegura!: SafeResourceUrl;

  ngOnInit() {
    const url = `https://www.youtube.com/embed/${this.data.youtube_id}?autoplay=1`;
    this.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
