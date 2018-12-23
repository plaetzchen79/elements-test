import { TestBed } from '@angular/core/testing';

import { DynamicElementService } from './dynamic-element.service';

describe('DynamicElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicElementService = TestBed.get(DynamicElementService);
    expect(service).toBeTruthy();
  });
});
