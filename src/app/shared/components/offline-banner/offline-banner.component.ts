import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../core/modules/material.module';

@Component({
  selector: 'app-offline-banner',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    @if (!isOnline()) {
      <div
        class="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm bg-slate-900/95 backdrop-blur-md text-white px-4 py-3 rounded-3xl shadow-xl border border-slate-800 flex items-center gap-3 z-50 animate-bounce"
      >
        <div
          class="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 shadow-2xs"
        >
          <mat-icon class="!w-5 !h-5 !text-[20px]">signal_wifi_off</mat-icon>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-slate-200">Você está offline</p>
          <p class="text-[10px] text-slate-400 truncate">Verifique sua conexão com a internet.</p>
        </div>
      </div>
    }
  `,
})
export class OfflineBannerComponent implements OnInit, OnDestroy {
  isOnline = signal<boolean>(navigator.onLine);

  private onlineListener = () => this.isOnline.set(true);
  private offlineListener = () => this.isOnline.set(false);

  ngOnInit() {
    window.addEventListener('online', this.onlineListener);
    window.addEventListener('offline', this.offlineListener);
  }

  ngOnDestroy() {
    window.removeEventListener('online', this.onlineListener);
    window.removeEventListener('offline', this.offlineListener);
  }
}
