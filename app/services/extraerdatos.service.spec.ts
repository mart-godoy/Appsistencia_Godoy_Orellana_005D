import { TestBed } from '@angular/core/testing';

import { ExtraerdatosService } from './extraerdatos.service';

describe('ExtraerdatosService', () => {
  let service: ExtraerdatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraerdatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
