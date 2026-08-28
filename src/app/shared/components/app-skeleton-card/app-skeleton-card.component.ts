import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full animate-pulse"
    >
      @for (item of itensArray(); track $index) {
        @if (tipo() === 'quadrado') {
          <div
            class="aspect-square bg-slate-100 rounded-3xl p-4 border border-slate-200/60 flex flex-col items-center justify-center gap-3"
          >
            <div class="w-12 h-12 rounded-full bg-slate-200"></div>
            <div class="h-3 bg-slate-200 rounded-full w-2/3"></div>
          </div>
        } @else {
          <div
            class="h-28 bg-slate-100 rounded-3xl p-4 border border-slate-200/60 flex items-center gap-4"
          >
            <div class="w-12 h-12 rounded-full bg-slate-200 shrink-0"></div>
            <div class="flex-1 space-y-2">
              <div class="h-3 bg-slate-200 rounded-full w-3/4"></div>
              <div class="h-2.5 bg-slate-200 rounded-full w-1/2"></div>
            </div>
          </div>
        }
      }
    </div>
  `,
})
export class SkeletonCardComponent {
  readonly quantidade = input<number>(4);
  readonly tipo = input<'card' | 'quadrado'>('card');

  readonly itensArray = computed(() => Array(this.quantidade()).fill(0));
}
