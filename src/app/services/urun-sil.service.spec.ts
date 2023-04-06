import { TestBed } from '@angular/core/testing';

import { UrunSilService } from './urun-sil.service';

describe('UrunSilService', () => {
  let service: UrunSilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrunSilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
