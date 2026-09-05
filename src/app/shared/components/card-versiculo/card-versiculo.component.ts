import { Component, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toPng } from 'html-to-image';
import { MaterialModule } from '../../../core/modules/material.module';
import { VersiculoDia } from '../../../core/services/devocional.service';
import { NotificationService } from '../../../core/services/notifications.service';

@Component({
  selector: 'app-versiculo-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div
      class="relative mt-2 mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 p-6 text-white shadow-md"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"
      ></div>

      <button
        type="button"
        (click)="compartilhar()"
        [disabled]="gerando()"
        title="Compartilhar versículo"
        aria-label="Compartilhar versículo"
        class="absolute top-3 right-3 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-inner backdrop-blur-sm transition-all hover:bg-white/30 active:scale-95 disabled:opacity-70"
      >
        @if (gerando()) {
          <mat-spinner diameter="16" class="!stroke-white"></mat-spinner>
        } @else {
          <mat-icon class="!h-5 !w-5 !text-[20px]">ios_share</mat-icon>
        }
      </button>

      <div class="relative z-10 flex flex-col items-center text-center">
        <div
          class="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-inner backdrop-blur-sm"
        >
          <mat-icon
            class="!h-[20px] !w-[20px] overflow-visible !text-[20px] !leading-none text-white"
            >menu_book</mat-icon
          >
        </div>

        <h2 class="mb-2 text-[11px] font-bold tracking-[0.2em] text-white/80 uppercase">
          Versículo do Dia
        </h2>

        <p
          class="mb-4 text-[15px] leading-relaxed font-semibold text-white italic drop-shadow-sm sm:text-base"
        >
          "{{ versiculo().texto }}"
        </p>

        <div
          class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/20 px-3 py-1 backdrop-blur-md"
        >
          <mat-icon class="!h-[14px] !w-[14px] overflow-visible !text-[14px] !leading-none"
            >bookmark</mat-icon
          >
          <span class="pt-[1px] text-xs font-bold">{{ versiculo().referencia }}</span>
        </div>
      </div>
    </div>

    <div class="pointer-events-none fixed top-0 -left-[9999px]" aria-hidden="true">
      <div
        #arte
        style="width:1080px;height:1350px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:96px 80px 72px;box-sizing:border-box;background:linear-gradient(160deg,#6366f1 0%,#0ea5e9 48%,#34d399 100%);color:#fff;font-family:system-ui,-apple-system,sans-serif;text-align:center;"
      >
        <div>
          <img
            src="img/logo-ibfc.png"
            alt=""
            width="120"
            height="120"
            style="height:96px;width:auto;object-fit:contain;margin:0 auto 20px;display:block;"
          />
          <p
            style="margin:0;font-size:22px;font-weight:800;letter-spacing:0.28em;text-transform:uppercase;opacity:0.85;"
          >
            Igreja Batista Filadélfia Church
          </p>
        </div>

        <div>
          <p
            style="margin:0 0 28px;font-size:18px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;opacity:0.8;"
          >
            Versículo do Dia
          </p>
          <p
            style="margin:0;font-size:42px;line-height:1.45;font-weight:600;font-style:italic;text-shadow:0 8px 24px rgba(0,0,0,0.15);"
          >
            "{{ versiculo().texto }}"
          </p>
          <p
            style="display:inline-block;margin-top:40px;padding:12px 28px;border-radius:999px;background:rgba(255,255,255,0.2);font-size:24px;font-weight:800;"
          >
            {{ versiculo().referencia }}
          </p>
        </div>

        <p style="margin:0;font-size:20px;font-weight:700;letter-spacing:0.12em;opacity:0.8;">
          Rede de Membros IBFC
        </p>
      </div>
    </div>
  `,
})
export class VersiculoCardComponent {
  versiculo = input.required<VersiculoDia>();

  private arte = viewChild.required<ElementRef<HTMLElement>>('arte');
  private notification = inject(NotificationService);
  gerando = signal(false);

  async compartilhar(): Promise<void> {
    if (this.gerando()) return;
    this.gerando.set(true);

    try {
      const dataUrl = await toPng(this.arte().nativeElement, {
        pixelRatio: 2,
        fontEmbedCSS: '',
        cacheBust: true,
        width: 1080,
        height: 1350,
      });

      const blob = await (await fetch(dataUrl)).blob();
      const arquivo = new File([blob], 'versiculo-ibfc.png', { type: 'image/png' });
      const texto = `"${this.versiculo().texto}" — ${this.versiculo().referencia}`;

      const nav = navigator as Navigator & {
        canShare?: (data: ShareData) => boolean;
      };

      if (nav.share && nav.canShare?.({ files: [arquivo] })) {
        await nav.share({ files: [arquivo], title: 'Versículo do Dia', text: texto });
      } else if (nav.share) {
        await nav.share({ title: 'Versículo do Dia', text: texto, url: dataUrl });
      } else {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'versiculo-ibfc.png';
        link.click();
        this.notification.sucesso('Imagem salva. Compartilhe no WhatsApp ou Stories.');
      }
    } catch (erro: unknown) {
      const abortou = erro instanceof Error && erro.name === 'AbortError';
      if (!abortou) {
        console.error(erro);
        this.notification.erro('Não foi possível gerar a imagem. Tente de novo.');
      }
    } finally {
      this.gerando.set(false);
    }
  }
}
