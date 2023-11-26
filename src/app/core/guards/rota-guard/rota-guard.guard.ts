import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../login/login-services/login.service';

export const rotaGuardGuard: CanActivateFn = (route, state) => {

  let loginService = inject(LoginService)
  let router = inject(Router)

  if (loginService.getToken() == null) {
    router.navigate(['/login']);
    return false;
  }else{
    return true;
  }

};
