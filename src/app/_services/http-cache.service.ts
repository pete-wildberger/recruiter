import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class CacheService {
	private maxAge = 60000;
	private cache = new Map();
	private exclude = [];

	get(req: HttpRequest<any>): HttpResponse<any> | undefined {
		const url = req.urlWithParams;
		const cached = this.cache.get(url);
		if (!cached) {
			return undefined;
		}
		const isExpired = cached.lastRead < Date.now() - this.maxAge;
		if (isExpired) {
			return undefined;
		}
		return cached.response;
	}

	put(req: HttpRequest<any>, response: HttpResponse<any>): void {
		const { url } = req;
		if (this.exclude.some((ex) => url.includes(ex))) {
			return;
		}
		const expired = Date.now() - this.maxAge;
		const entry = { url, response, lastRead: Date.now() };
		this.cache.set(url, entry);

		this.cache.forEach((expiredEntry) => {
			if (expiredEntry.lastRead < expired) {
				this.cache.delete(expiredEntry.url);
			}
		});
	}
}
