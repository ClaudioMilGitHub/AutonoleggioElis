import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "../auth/services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.userDecoded && authService.userDecoded.ruolo == 1) {
    return true;
  } else {
    return router.navigateByUrl('login');
  }
}
