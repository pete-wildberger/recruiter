import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	constructor(private http: HttpClient) {}

	async getUsers() {
		return await this.get(`${environment.localhost}/users`);
	}

	async get(url: string): Promise<any> {
		try {
			const res = await this.http.get(url).toPromise();
			return res;
		} catch (e) {
			console.error(e);
			return null;
		}
	}
}
