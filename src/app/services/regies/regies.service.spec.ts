import { TestBed } from '@angular/core/testing';

import { RegiesService } from './regies.service';

describe('RegiesService', () => {
  let service: RegiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
