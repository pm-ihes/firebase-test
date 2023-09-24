import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { outerauthGuard } from './outerauth.guard';

describe('outerauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => outerauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
