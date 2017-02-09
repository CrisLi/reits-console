import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const baseUrl = 'https://api.mlab.com/api/1/databases/reits';
const apiKey = 'EhpBOdclXrepXAuPKpXeijpuT19p2peh';

const headers = new Headers({ 'Content-Type': 'application/json' });
const params = new URLSearchParams();

params.set('apiKey', apiKey);

const options = new RequestOptions({
  headers: headers,
  search: params
});

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

  get(url: string): Observable<Response> {
    return this.http.get(`${baseUrl}${url}`, options);
  }

  post(url: string, body: any): Observable<Response> {
    const bodyString = JSON.stringify(body);
    return this.http.post(`${baseUrl}${url}`, bodyString, options);
  }

}
