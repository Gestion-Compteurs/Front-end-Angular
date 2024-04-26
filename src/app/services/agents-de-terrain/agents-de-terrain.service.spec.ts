import { TestBed } from '@angular/core/testing';

import { AgentsDeTerrainService } from './agents-de-terrain.service';

describe('AgentsDeTerrainService', () => {
  let service: AgentsDeTerrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentsDeTerrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
