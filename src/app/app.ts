import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OfflineBannerComponent } from './shared/components/offline-banner/offline-banner.component';
import { UpdateService } from './core/services/update.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OfflineBannerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent implements OnInit {
  private updateService = inject(UpdateService);

  ngOnInit(): void {
    this.updateService.iniciarObservadorDeAtualizacoes();
  }
}
