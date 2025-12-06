import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  // Skip adding Authorization header for authentication endpoints
  // Extract pathname from URL to handle query params and trailing slashes
  const url = new URL(req.url, 'http://localhost'); // Use dummy base for relative URLs
  const pathname = url.pathname;
  const isAuthEndpoint = pathname.endsWith('/login') || pathname.endsWith('/register');

  if (token && !isAuthEndpoint) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !isAuthEndpoint) {
        authService.logout();
      }
      return throwError(() => error);
    })
  );
};
