import { TestBed } from '@angular/core/testing';

import { DoorLockService } from './door-lock.service';

describe('DoorLockService', () => {
  let service: DoorLockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoorLockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
