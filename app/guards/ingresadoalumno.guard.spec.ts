import { TestBed } from '@angular/core/testing';

import { IngresadoalumnoGuard } from './ingresadoalumno.guard';

describe('IngresadoalumnoGuard', () => {
  let guard: IngresadoalumnoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoalumnoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
