import { TestBed } from '@angular/core/testing';

import { InstancesCompteursService } from './instances-compteurs.service';

describe('InstancesCompteursService', () => {
  let service: InstancesCompteursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstancesCompteursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
