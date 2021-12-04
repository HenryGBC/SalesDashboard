import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const API_URL = environment.api_url;

@Injectable()
export class AppInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let reqModified;
    const headers: any = {
      'Content-Type': 'application/json',
    };

    const token = localStorage.getItem('sales.token');
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    reqModified = req.clone({
      url: API_URL + req.url,
      setHeaders: headers,
    });
    return next.handle(reqModified).pipe(
      catchError((err: any) => this._catchError(API_URL, req, err)),
      map((response: any) => {
        return response;
      })
    );
  }
  private _catchError(server: string, req: HttpRequest<any>, error: any) {
    return throwError(error);
  }
}
