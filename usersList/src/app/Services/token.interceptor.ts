import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private readonly token = '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';
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Token ${this.token}`
        // auth: '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',
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "Content-Type, Authorization",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    });
    return next.handle(request);
  }
}




