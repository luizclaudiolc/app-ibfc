import { Component, ElementRef, inject, input, signal, viewChild, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toPng } from 'html-to-image';
import { MaterialModule } from '../../../core/modules/material.module';
import { VersiculoDia } from '../../../core/services/devocional.service';
import { NotificationService } from '../../../core/services/notifications.service';
import { GRADIENTES_VERSICULOS_DIARIOS } from '../../models/consts';

const LARGURA = 1080;
const ALTURA = 1350;
const LOGO_SRC = 'img/logo-ibfc-preto.png';

const ehIOS = (): boolean =>
  /iP(ad|hone|od)/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

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
          {{ rotulo() }}
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

    @if (!ios) {
      <div class="pointer-events-none fixed -left-[9999px] top-0" aria-hidden="true">
        <div
          #arte
          [style.background]="gradienteDiario()"
          style="width:1080px;height:1350px;padding:80px;box-sizing:border-box;display:flex;flex-direction:column;font-family:system-ui,-apple-system,sans-serif;"
        >
          <div
            style="flex:1;background:rgba(255,255,255,0.85);border-radius:56px;border:2px solid rgba(255,255,255,0.95);display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:90px 70px;text-align:center;position:relative;overflow:hidden;"
          >
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
                Igreja Batista Filadélfia
              </p>
            </div>
            <div style="position:relative;z-index:1;width:100%;">
              <p
                style="margin:0 0 32px;font-size:16px;font-weight:800;letter-spacing:0.3em;text-transform:uppercase;color:rgba(15,23,42,0.45);"
              >
                {{ rotulo() }}
              </p>
              <blockquote
                style="margin:0;font-size:44px;line-height:1.45;font-weight:500;font-style:italic;color:#1e293b;padding:0 20px;"
              >
                "{{ versiculo().texto }}"
              </blockquote>
              <div
                style="display:inline-block;margin-top:44px;padding:16px 36px;border-radius:999px;background:#ffffff;font-size:24px;font-weight:800;color:#0f172a;border:1px solid rgba(15,23,42,0.08);"
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
    }
  `,
})
export class VersiculoCardComponent {
  versiculo = input.required<VersiculoDia>();
  rotulo = input.required<string>();

  private arte = viewChild<ElementRef<HTMLElement>>('arte');
  private notification = inject(NotificationService);
  gerando = signal(false);
  readonly ios = ehIOS();

  gradienteDiario = computed(() => {
    const diaAtual = new Date().getDate();
    return GRADIENTES_VERSICULOS_DIARIOS[diaAtual % GRADIENTES_VERSICULOS_DIARIOS.length];
  });

  async compartilhar(): Promise<void> {
    if (this.gerando()) return;
    this.gerando.set(true);

    try {
      const dataUrl = this.ios ? await this.gerarCanvasIOS() : await this.gerarHtmlAndroid();

      const blob = await (await fetch(dataUrl)).blob();
      const arquivo = new File([blob], 'versiculo-ibfc.png', { type: 'image/png' });
      const texto = `"${this.versiculo().texto}" — ${this.versiculo().referencia}`;
      const nav = navigator as Navigator & { canShare?: (data: ShareData) => boolean };

      if (nav.share && nav.canShare?.({ files: [arquivo] })) {
        await nav.share({ files: [arquivo], title: this.rotulo(), text: texto });
      } else if (nav.share) {
        await nav.share({ title: this.rotulo(), text: texto });
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

  private gerarHtmlAndroid(): Promise<string> {
    const no = this.arte()?.nativeElement;
    if (!no) return Promise.reject(new Error('Arte ausente'));
    return toPng(no, {
      pixelRatio: 2,
      fontEmbedCSS: '',
      cacheBust: true,
      width: LARGURA,
      height: ALTURA,
    });
  }

  private async gerarCanvasIOS(): Promise<string> {
    const canvas = document.createElement('canvas');
    const escala = 2;
    canvas.width = LARGURA * escala;
    canvas.height = ALTURA * escala;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas indisponível');
    ctx.scale(escala, escala);

    this.pintarGradiente(ctx, this.gradienteDiario());

    const m = 80;
    this.roundRect(ctx, m, m, LARGURA - m * 2, ALTURA - m * 2, 56);
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.95)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const cx = LARGURA / 2;

    try {
      const logo = await this.carregarImagem(LOGO_SRC);
      const hLogo = 64;
      const wLogo = (logo.width / logo.height) * hLogo;
      ctx.drawImage(logo, cx - wLogo / 2, 190, wLogo, hLogo);
    } catch (e) {
      console.warn('Logo não carregou no iOS', e);
    }

    ctx.fillStyle = 'rgba(15,23,42,0.5)';
    ctx.font = '800 18px -apple-system, system-ui, sans-serif';
    ctx.letterSpacing = '4px';
    ctx.fillText('IGREJA BATISTA FILADÉLFIA', cx, 280);
    ctx.letterSpacing = '0px';

    ctx.fillStyle = 'rgba(15,23,42,0.45)';
    ctx.font = '800 16px -apple-system, system-ui, sans-serif';
    ctx.letterSpacing = '5px';
    ctx.fillText('VERSÍCULO DO DIA', cx, 520);
    ctx.letterSpacing = '0px';

    const citacao = `"${this.versiculo().texto}"`;
    ctx.fillStyle = '#1e293b';
    ctx.font = 'italic 500 40px -apple-system, system-ui, sans-serif';
    const linhas = this.quebrarTexto(ctx, citacao, 780);
    const lh = 58;
    const y0 = 700 - ((linhas.length - 1) * lh) / 2;
    linhas.forEach((linha, i) => ctx.fillText(linha, cx, y0 + i * lh));

    const ref = this.versiculo().referencia;
    ctx.font = '800 24px -apple-system, system-ui, sans-serif';
    const tw = ctx.measureText(ref).width;
    const pw = tw + 72;
    const ph = 56;
    const py = 1080;
    this.roundRect(ctx, cx - pw / 2, py - ph / 2, pw, ph, 999);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = 'rgba(15,23,42,0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = '#0f172a';
    ctx.fillText(ref, cx, py);

    ctx.fillStyle = 'rgba(15,23,42,0.4)';
    ctx.font = '700 16px -apple-system, system-ui, sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('REDE DE MEMBROS IBFC', cx, 1220);

    return canvas.toDataURL('image/png');
  }

  private pintarGradiente(ctx: CanvasRenderingContext2D, css: string): void {
    const match = css.match(
      /linear-gradient\((\d+)deg,\s*(#[0-9a-fA-F]{3,8})\s+[\d.]+%,\s*(#[0-9a-fA-F]{3,8})/,
    );
    const c1 = match?.[2] ?? '#bae6fd';
    const c2 = match?.[3] ?? '#bfdbfe';
    const deg = Number(match?.[1] ?? 160);
    const rad = ((deg % 360) * Math.PI) / 180;
    const x = Math.sin(rad);
    const y = -Math.cos(rad);
    const len = Math.abs(LARGURA * x) + Math.abs(ALTURA * y);
    const g = ctx.createLinearGradient(
      LARGURA / 2 - (x * len) / 2,
      ALTURA / 2 - (y * len) / 2,
      LARGURA / 2 + (x * len) / 2,
      ALTURA / 2 + (y * len) / 2,
    );
    g.addColorStop(0, c1);
    g.addColorStop(1, c2);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, LARGURA, ALTURA);
  }

  private roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number,
  ): void {
    const raio = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + raio, y);
    ctx.arcTo(x + w, y, x + w, y + h, raio);
    ctx.arcTo(x + w, y + h, x, y + h, raio);
    ctx.arcTo(x, y + h, x, y, raio);
    ctx.arcTo(x, y, x + w, y, raio);
    ctx.closePath();
  }

  private quebrarTexto(ctx: CanvasRenderingContext2D, texto: string, max: number): string[] {
    const palavras = texto.split(' ');
    const linhas: string[] = [];
    let atual = '';
    for (const p of palavras) {
      const teste = atual ? `${atual} ${p}` : p;
      if (ctx.measureText(teste).width > max && atual) {
        linhas.push(atual);
        atual = p;
      } else {
        atual = teste;
      }
    }
    if (atual) linhas.push(atual);
    return linhas;
  }

  private async carregarImagem(src: string): Promise<HTMLImageElement> {
    const abs = new URL(src, document.baseURI).href;
    const res = await fetch(abs);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  }
}
