import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // return true;
    const isLoggedIn = true;

  if (isLoggedIn) {
    return true;
  }

  return false;
};
