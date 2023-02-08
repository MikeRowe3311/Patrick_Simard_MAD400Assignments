import { TestBed } from '@angular/core/testing';

import { SpaceEngineersService } from './space-engineers.service';

describe('SpaceEngineersService', () => {
  let service: SpaceEngineersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceEngineersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
