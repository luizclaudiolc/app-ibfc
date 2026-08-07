import { Component, ElementRef, ViewChild, input, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scrollable-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      #carouselContainer
      (scroll)="onScroll($event)"
      class="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-2 px-4 -mx-4"
    >
      <ng-content></ng-content>
    </div>

    @if (itemCount() > 1) {
      <div class="flex justify-center items-center gap-2 mt-1 mb-2">
        @for (i of getArray(itemCount()); track i) {
          <div
            class="rounded-full transition-all duration-300"
            [ngClass]="i === currentIndex() ? 'w-8 h-2 bg-sky-600' : 'w-2 h-2 bg-slate-300'"
          ></div>
        }
      </div>
    }
  `,
})
export class ScrollableCarouselComponent {
  itemCount = input.required<number>();
  currentIndex = signal(0);

  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  onScroll(event: Event): void {
    const container = event.target as HTMLElement;
    if (!container || container.children.length === 0) return;

    const cardWidth = (container.children[0] as HTMLElement).offsetWidth + 16;
    const scrollLeft = container.scrollLeft;

    this.currentIndex.set(Math.round(scrollLeft / cardWidth));
  }

  getArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }
}
