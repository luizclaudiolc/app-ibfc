import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  abaAlterada = output<string>();
  abaAtiva = signal<string>('feed');

  mudarAba(aba: string): void {
    this.abaAtiva.set(aba);
    this.abaAlterada.emit(aba);
  }
}
