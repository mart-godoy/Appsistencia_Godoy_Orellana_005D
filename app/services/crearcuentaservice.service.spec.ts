import { TestBed } from '@angular/core/testing';

import { CrearcuentaserviceService } from './crearcuentaservice.service';

describe('CrearcuentaserviceService', () => {
  let service: CrearcuentaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearcuentaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
