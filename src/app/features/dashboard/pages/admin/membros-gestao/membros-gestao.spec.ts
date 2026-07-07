import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosGestao } from './membros-gestao';

describe('MembrosGestao', () => {
  let component: MembrosGestao;
  let fixture: ComponentFixture<MembrosGestao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembrosGestao],
    }).compileComponents();

    fixture = TestBed.createComponent(MembrosGestao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
