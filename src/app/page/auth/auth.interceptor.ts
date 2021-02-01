import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.get('auth-token') == "True")
      return next.handle(request.clone());

    if (localStorage.getItem('userToken') != null) {
        console.log('Atleast is inside this');
        const clonedreq = request.clone({
            headers: request.headers.set("auth-token",""+ localStorage.getItem('userToken'))
        });

        return next.handle(clonedreq).pipe(
            tap(
                event =>  event instanceof HttpResponse ? 'succeeded': 
                (error: any) => {
                    if (error.status == 401)
                        this.router.navigateByUrl('/login');
                })
              );
    }else {
        this.router.navigateByUrl('/login');
        return next.handle(request);//Still not sure with this
    }
  }
}
