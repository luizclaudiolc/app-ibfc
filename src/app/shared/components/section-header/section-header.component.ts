import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="flex items-center justify-between px-1 pb-1">
      <div class="flex flex-col">
        <div class="flex items-center gap-1.5 text-slate-400">
          @if (icon()) {
            <mat-icon
              class="!w-[20px] !h-[20px] !text-[20px] !leading-none text-sky-500 overflow-visible"
            >
              {{ icon() }}
            </mat-icon>
          }

          <h2 class="text-[11px] font-bold uppercase tracking-[0.15em] pt-[1px]">
            {{ title() }}
          </h2>
        </div>

        @if (subtitle()) {
          <p class="text-sm text-slate-600 font-medium mt-1 leading-snug tracking-tight">
            {{ subtitle() }}
          </p>
        }
      </div>

      @if (badgeText()) {
        <span
          class="text-[10px] font-bold text-sky-600 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full uppercase tracking-widest whitespace-nowrap ml-3 shadow-sm"
        >
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
  icon = input<string>();
}
