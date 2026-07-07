import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSetorDialog } from './editar-setor-dialog';

describe('EditarSetorDialog', () => {
  let component: EditarSetorDialog;
  let fixture: ComponentFixture<EditarSetorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarSetorDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarSetorDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
