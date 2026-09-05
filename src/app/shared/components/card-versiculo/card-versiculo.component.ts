import { Component, ElementRef, inject, input, signal, viewChild, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toPng } from 'html-to-image';
import { MaterialModule } from '../../../core/modules/material.module';
import { VersiculoDia } from '../../../core/services/devocional.service';
import { NotificationService } from '../../../core/services/notifications.service';
import { GRADIENTES_VERSICULOS_DIARIOS } from '../../models/consts';

@Component({
  selector: 'app-versiculo-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div
      class="relative mt-2 mb-8 overflow-hidden rounded-3xl p-6 shadow-sm ring-1 ring-black/5 transition-all duration-500"
      [style.background]="gradienteDiario()"
    >
      <div
        class="pointer-events-none absolute right-4 bottom-2 select-none text-white/30 mix-blend-overlay"
      >
        <mat-icon class="!h-24 !w-24 !text-[96px]">format_quote</mat-icon>
      </div>

      <button
        type="button"
        (click)="compartilhar()"
        [disabled]="gerando()"
        title="Compartilhar versículo"
        class="absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-sm ring-1 ring-black/5 backdrop-blur-md transition-all hover:bg-white active:scale-95 disabled:opacity-70"
      >
        @if (gerando()) {
          <mat-spinner diameter="16" class="!stroke-slate-600"></mat-spinner>
        } @else {
          <mat-icon class="!h-5 !w-5 !text-[20px]">ios_share</mat-icon>
        }
      </button>

      <div class="relative z-10 flex flex-col items-center text-center pt-2">
        <div
          class="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 shadow-sm ring-1 ring-black/5 backdrop-blur-md"
        >
          <mat-icon class="!h-7 !w-7 !text-[28px] text-slate-700">menu_book</mat-icon>
        </div>

        <h2 class="mb-3 text-[10px] font-extrabold tracking-[0.25em] text-slate-700/80 uppercase">
          Versículo do Dia
        </h2>

        <blockquote
          class="mb-5 px-2 text-[15px] leading-relaxed font-medium italic text-slate-800 md:text-[17px]"
        >
          "{{ versiculo().texto }}"
        </blockquote>

        <div
          class="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-1.5 shadow-sm ring-1 ring-black/5 backdrop-blur-md"
        >
          <mat-icon class="!h-[14px] !w-[14px] !text-[14px] !leading-none text-slate-600">
            auto_stories
          </mat-icon>
          <span class="pt-[1px] text-xs font-bold text-slate-800">{{
            versiculo().referencia
          }}</span>
        </div>
      </div>
    </div>

    <div class="pointer-events-none fixed -left-[9999px] top-0" aria-hidden="true">
      <div
        #arte
        [style.background]="gradienteDiario()"
        style="width:1080px;height:1350px;padding:80px;box-sizing:border-box;display:flex;flex-direction:column;font-family:system-ui,-apple-system,sans-serif;"
      >
        <div
          style="flex:1;background:rgba(255,255,255,0.85);border-radius:56px;border:2px solid rgba(255,255,255,0.95);box-shadow:0 32px 64px rgba(0,0,0,0.06);display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:90px 70px;text-align:center;position:relative;overflow:hidden;"
        >
          <div
            style="position:absolute;top:30px;left:40px;font-size:180px;line-height:1;font-family:serif;color:rgba(0,0,0,0.04);z-index:0;pointer-events:none;"
          >
            “
          </div>

          <div
            style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;"
          >
            <img
              src="img/logo-ibfc-preto.png"
              alt=""
              style="height:64px;width:auto;object-fit:contain;margin-bottom:20px;display:block;"
            />
            <p
              style="margin:0;font-size:18px;font-weight:800;letter-spacing:0.25em;text-transform:uppercase;color:rgba(15,23,42,0.5);"
            >
              Igreja Batista Filadélfia church
            </p>
          </div>

          <div style="position:relative;z-index:1;width:100%;">
            <p
              style="margin:0 0 32px;font-size:16px;font-weight:800;letter-spacing:0.3em;text-transform:uppercase;color:rgba(15,23,42,0.45);"
            >
              Versículo do Dia
            </p>
            <blockquote
              style="margin:0;font-size:44px;line-height:1.45;font-weight:500;font-style:italic;color:#1e293b;padding:0 20px;"
            >
              "{{ versiculo().texto }}"
            </blockquote>
            <div
              style="display:inline-block;margin-top:44px;padding:16px 36px;border-radius:999px;background:#ffffff;box-shadow:0 8px 24px rgba(0,0,0,0.06);font-size:24px;font-weight:800;color:#0f172a;border:1px solid rgba(0,0,0,0.03);"
            >
              {{ versiculo().referencia }}
            </div>
          </div>

          <div style="position:relative;z-index:1;">
            <p
              style="margin:0;font-size:16px;font-weight:700;letter-spacing:0.15em;color:rgba(15,23,42,0.4);"
            >
              Rede de Membros IBFC
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class VersiculoCardComponent {
  versiculo = input.required<VersiculoDia>();

  private arte = viewChild.required<ElementRef<HTMLElement>>('arte');
  private notification = inject(NotificationService);
  gerando = signal(false);

  gradienteDiario = computed(() => {
    const diaAtual = new Date().getDate();
    return GRADIENTES_VERSICULOS_DIARIOS[diaAtual % GRADIENTES_VERSICULOS_DIARIOS.length];
  });

  async compartilhar(): Promise<void> {
    if (this.gerando()) return;
    this.gerando.set(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 150));

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
