import { TestBed } from '@angular/core/testing';

import { SuyashLernaService } from './suyash-lerna.service';

describe('SuyashLernaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuyashLernaService = TestBed.get(SuyashLernaService);
    expect(service).toBeTruthy();
  });
});
