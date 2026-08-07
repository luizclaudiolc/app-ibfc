import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-layout',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  template: `
    <div class="bg-slate-50 flex flex-col h-full max-h-[90vh]">
      <div
        class="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between shrink-0 rounded-t-2xl"
      >
        <div class="flex items-center gap-3">
          <div class="shrink-0 relative">
            <ng-content select="[dialog-icon]"></ng-content>
          </div>

          <div>
            <h2 class="text-base font-bold text-slate-800 leading-tight">
              {{ title() }}
            </h2>
            <div class="flex items-center gap-1.5 mt-0.5 text-[11px] text-slate-500 font-medium">
              <ng-content select="[dialog-subtitle]"></ng-content>
            </div>
          </div>
        </div>

        <button
          mat-dialog-close
          class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
          type="button"
        >
          <mat-icon class="text-[16px] w-[16px] h-[16px] flex items-center justify-center"
            >close</mat-icon
          >
        </button>
      </div>

      <div class="p-6 overflow-y-auto flex-1">
        <ng-content></ng-content>
      </div>

      <div class="bg-white border-t border-slate-100 p-4 shrink-0 flex gap-3 rounded-b-2xl">
        <ng-content select="[dialog-actions]"></ng-content>
      </div>
    </div>
  `,
})
export class DialogLayoutComponent {
  title = input.required<string>();
}
