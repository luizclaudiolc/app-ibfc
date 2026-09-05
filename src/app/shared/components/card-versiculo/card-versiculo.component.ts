import { Component, ElementRef, inject, input, signal, viewChild, computed } from '@angular/core';
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
      class="relative mt-2 mb-8 overflow-hidden rounded-3xl p-7 shadow-sm ring-1 ring-black/5 transition-all duration-500"
      [style.background]="gradienteDiario()"
    >
      <mat-icon
        class="pointer-events-none absolute -left-4 -top-4 z-0 rotate-12 select-none text-white/50 mix-blend-overlay !h-[140px] !w-[140px] !text-[140px]"
        aria-hidden="true"
      >
        format_quote
      </mat-icon>

      <button
        type="button"
        (click)="compartilhar()"
        [disabled]="gerando()"
        title="Compartilhar versículo"
        class="absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/60 text-slate-700 shadow-sm ring-1 ring-white/50 backdrop-blur-md transition-all hover:bg-white/80 active:scale-95 disabled:opacity-70"
      >
        @if (gerando()) {
          <mat-spinner diameter="16" class="!stroke-slate-600"></mat-spinner>
        } @else {
          <mat-icon class="!h-5 !w-5 !text-[20px]">ios_share</mat-icon>
        }
      </button>

      <div class="relative z-10 mt-6 flex flex-col items-center text-center">
        <h2
          class="mb-5 text-[10px] font-extrabold tracking-[0.25em] text-slate-700/80 uppercase mix-blend-multiply"
        >
          Versículo do Dia
        </h2>

        <p class="mb-7 text-[16px] leading-relaxed font-medium text-slate-800 md:text-[18px]">
          "{{ versiculo().texto }}"
        </p>

        <div
          class="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-4 py-2 shadow-sm ring-1 ring-white/50 backdrop-blur-md"
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
          style="flex:1;background:rgba(255,255,255,0.65);border-radius:64px;border:2px solid rgba(255,255,255,0.8);box-shadow:0 32px 64px rgba(0,0,0,0.05);display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:80px 60px;text-align:center;position:relative;overflow:hidden;"
        >
          <div
            style="position:absolute;top:-40px;left:-20px;font-size:300px;line-height:1;font-family:serif;color:rgba(255,255,255,0.7);z-index:0;pointer-events:none;"
          >
            “
          </div>

          <div style="position:relative;z-index:1;">
            <img
              src="img/logo-ibfc.png"
              alt=""
              width="120"
              height="120"
              style="height:88px;width:auto;object-fit:contain;margin:0 auto 24px;display:block;opacity:0.9;"
            />
            <p
              style="margin:0;font-size:20px;font-weight:800;letter-spacing:0.25em;text-transform:uppercase;color:rgba(15,23,42,0.4);"
            >
              Igreja Batista Filadélfia CHURCH
            </p>
          </div>

          <div style="position:relative;z-index:1;width:100%;">
            <p
              style="margin:0 0 40px;font-size:16px;font-weight:800;letter-spacing:0.3em;text-transform:uppercase;color:rgba(15,23,42,0.5);"
            >
              Versículo do Dia
            </p>
            <p
              style="margin:0;font-size:48px;line-height:1.4;font-weight:500;color:#1e293b;padding:0 20px;"
            >
              "{{ versiculo().texto }}"
            </p>
            <div
              style="display:inline-block;margin-top:48px;padding:16px 36px;border-radius:999px;background:#ffffff;box-shadow:0 8px 16px rgba(0,0,0,0.03);font-size:24px;font-weight:800;color:#0f172a;"
            >
              {{ versiculo().referencia }}
            </div>
          </div>

          <div style="position:relative;z-index:1;">
            <p
              style="margin:0;font-size:18px;font-weight:700;letter-spacing:0.1em;color:rgba(15,23,42,0.4);"
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
    const paleta = [
      'linear-gradient(160deg, #fecaca 0%, #fed7aa 100%)',
      'linear-gradient(160deg, #fed7aa 0%, #fde68a 100%)',
      'linear-gradient(160deg, #fde68a 0%, #fef08a 100%)',
      'linear-gradient(160deg, #bbf7d0 0%, #a7f3d0 100%)',
      'linear-gradient(160deg, #99f6e4 0%, #a5f3fc 100%)',
      'linear-gradient(160deg, #bae6fd 0%, #bfdbfe 100%)',
      'linear-gradient(160deg, #c7d2fe 0%, #ddd6fe 100%)',
      'linear-gradient(160deg, #e9d5ff 0%, #f5d0fe 100%)',
      'linear-gradient(160deg, #fbcfe8 0%, #fecdd3 100%)',
    ];

    const diaAtual = new Date().getDate();
    return paleta[diaAtual % paleta.length];
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
