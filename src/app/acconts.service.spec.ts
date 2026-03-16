import { TestBed } from '@angular/core/testing';

import { AccontsService } from './acconts.service';

describe('AccontsService', () => {
  let service: AccontsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccontsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
