import { TestBed } from '@angular/core/testing';

import { GuncellemeService } from './guncelleme.service';

describe('GuncellemeService', () => {
  let service: GuncellemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuncellemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
