import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpInterceptor,
  HttpHandler,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from './http-cache.service';
@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  private whitelist = [];
  constructor(private cache: CacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cachedResponse = this.cache.get(req);
    if (cachedResponse !== undefined) {
      cachedResponse.body.intercepted = true;
    }
    return cachedResponse && req.method === 'GET' && !this.isBlackList(req)
      ? of(cachedResponse)
      : this.sendRequest(req, next, this.cache);
  }

  isBlackList({ url }): boolean {
    const is_white_list = this.whitelist.some((item) => url.includes(item));

    return is_white_list;
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: CacheService
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          if (req.method === 'GET') {
            cache.put(req, event);
          }
        }
      })
    );
  }
}
