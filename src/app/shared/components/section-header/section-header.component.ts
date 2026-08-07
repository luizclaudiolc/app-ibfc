import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="flex items-center justify-between px-1">
      <div>
        <h2 class="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          {{ title() }}
        </h2>
        @if (subtitle()) {
          <p class="text-sm text-slate-500 mt-1">{{ subtitle() }}</p>
        }
      </div>

      @if (badgeText()) {
        <span class="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
          {{ badgeText() }}
        </span>
      }
    </div>
  `,
})
export class SectionHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>();
  badgeText = input<string | number>();
}
