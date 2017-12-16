import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class GithubService {
	private api: string = "https://api.github.com";
	constructor(
		private http: HttpClient
	) {}
	fetchGithubAPI(url: string) {
		return this.http.get(url);
	}
	getLogs() {
		return this.http.get('http://app.gitlogs.com/trending?date=2017-11-30');
	}
	getTopDevs() {
		const url = `${this.api}/search/users`;
		const params = new HttpParams()
							.set('q', 'followers:>50')
							.set('sort', 'followers')
							.set('order', 'desc');
		return this.http.get(url, {params});
	}
	getTopRepos() {
		const url = `${this.api}/search/repositories`;
		const params = new HttpParams()
							.set('q', 'stars:>0')
							.set('sort', 'stars')
							.set('order', 'desc');
		return this.http.get(url, {params});
	}
}
