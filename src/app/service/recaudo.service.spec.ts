import { TestBed } from '@angular/core/testing';

import { RecaudoService } from './recaudo.service';

describe('RecaudoService', () => {
  let service: RecaudoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecaudoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
