import { TestBed } from '@angular/core/testing';

import { FifaService } from './fifa.service';

describe('FifaService', () => {
  let service: FifaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FifaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
