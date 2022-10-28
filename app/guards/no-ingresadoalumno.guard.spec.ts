import { TestBed } from '@angular/core/testing';

import { NoIngresadoalumnoGuard } from './no-ingresadoalumno.guard';

describe('NoIngresadoalumnoGuard', () => {
  let guard: NoIngresadoalumnoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoIngresadoalumnoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
