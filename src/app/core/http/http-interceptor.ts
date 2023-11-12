import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ResponseHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          const responseHeaders = event.headers;
          const vendureToken = responseHeaders.get('Vendure-Auth-Token');

          if(vendureToken) {
            localStorage.setItem('vendureToken', vendureToken);
          }
        }
      })
    );
  }
}
