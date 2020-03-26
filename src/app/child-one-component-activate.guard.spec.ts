import { TestBed } from '@angular/core/testing';

import { ChildOneComponentActivateGuard } from './child-one-component-activate.guard';

describe('ChildOneComponentActivateGuard', () => {
  let guard: ChildOneComponentActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildOneComponentActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
