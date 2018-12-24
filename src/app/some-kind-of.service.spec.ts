import { TestBed } from '@angular/core/testing';

import { SomeKindOfService } from './some-kind-of.service';

describe('SomeKindOfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomeKindOfService = TestBed.get(SomeKindOfService);
    expect(service).toBeTruthy();
  });
});
