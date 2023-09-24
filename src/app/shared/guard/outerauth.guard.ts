import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const outerauthGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isLoggedIn
    ? inject(Router).navigate(['dashboard'])
    : true;
};
