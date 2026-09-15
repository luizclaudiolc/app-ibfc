import { Component, computed, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Membro } from '../../models/membro.model';
import { GENERO_MAP } from '../../models/consts';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-birthday-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-sm"
    >
      <div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-sky-50 to-transparent"></div>

      <div class="relative z-10 mb-3 h-20 w-20">
        @if (membro().foto_url) {
          <img
            [src]="membro().foto_url"
            class="h-full w-full rounded-full object-cover shadow-sm ring-4 ring-white"
            alt="Foto"
          />
        } @else {
          <div
            class="flex h-full w-full items-center justify-center rounded-full border border-slate-200/40 bg-gradient-to-br from-slate-100 to-slate-200 text-2xl font-bold text-slate-500 shadow-sm ring-4 ring-white"
          >
            {{ membro().nome[0].toUpperCase() }}
          </div>
        }

        @if (ehHoje()) {
          <div
            class="absolute -right-1 -bottom-2 animate-pulse rounded-full border-2 border-white bg-emerald-500 px-2.5 py-1 text-[10px] font-bold whitespace-nowrap text-white shadow-md"
          >
            🎉 É HOJE!
          </div>
        } @else {
          <div
            class="absolute -right-1 -bottom-2 rounded-full border-2 border-white bg-sky-600 px-2.5 py-1 text-[10px] font-bold whitespace-nowrap text-white shadow-sm"
          >
            Dia {{ membro().data_nascimento | date: 'dd/MM' : 'UTC' }}
          </div>
        }
      </div>

      <h3 class="relative z-10 text-base leading-tight font-bold text-slate-800">
        {{ membro().nome }} {{ membro().sobrenome }}
      </h3>

      <p class="relative z-10 mt-2 mb-5 text-xs leading-relaxed text-slate-500">
        @if (ehHoje()) {
          {{ saudacao() }}
        } @else if (ehVespera()) {
          Amanhã é o grande dia!
        } @else {
          O aniversário está chegando!
        }
      </p>

      @if (mostrarWhatsApp()) {
        <button
          type="button"
          (click)="enviarMensagem.emit()"
          class="relative z-10 mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20bd5a] active:scale-[0.98]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.005-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
            />
          </svg>
          Enviar Mensagem
        </button>
      }
    </div>
  `,
})
export class CardAniversarianteComponent {
  membro = input.required<Membro>();
  ehHoje = input.required<boolean>();
  enviarMensagem = output<void>();

  private readonly authService = inject(AuthService);
  private readonly userGenero = this.authService.userGenero$;

  ehVespera = computed(() => this.caiEm(1));

  mostrarWhatsApp = computed(() => this.ehHoje() || this.ehVespera());

  saudacao = computed(() => {
    const generoId = this.membro()?.genero;
    const generoText = generoId != null ? GENERO_MAP[generoId] : null;

    if (generoText === 'Masculino') {
      return 'Deixe o dia do nosso irmão mais feliz com uma mensagem!';
    }

    if (generoText === 'Feminino') {
      return 'Deixe o dia da nossa irmã mais feliz com uma mensagem!';
    }

    return 'Deixe o dia do nosso irmão(a) mais feliz com uma mensagem!';
  });

  private caiEm(diasAPartirDeHoje: number): boolean {
    const iso = this.membro().data_nascimento;
    if (!iso) return false;

    const alvo = new Date();
    alvo.setDate(alvo.getDate() + diasAPartirDeHoje);

    const [, mes, dia] = iso.split('-');
    return +mes === alvo.getMonth() + 1 && +dia === alvo.getDate();
  }
}
