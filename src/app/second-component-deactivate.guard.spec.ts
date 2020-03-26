import { TestBed } from '@angular/core/testing';

import { SecondComponentDeactivateGuard } from './second-component-deactivate.guard';

describe('SecondComponentDeactivateGuard', () => {
  let guard: SecondComponentDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecondComponentDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
