import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarLiderDialog } from './selecionar-lider-dialog';

describe('SelecionarLiderDialog', () => {
  let component: SelecionarLiderDialog;
  let fixture: ComponentFixture<SelecionarLiderDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionarLiderDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(SelecionarLiderDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
