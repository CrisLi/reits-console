import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

const baseUrl = 'https://api.mlab.com/api/1/databases/reits/collections';
const apiKey = 'EhpBOdclXrepXAuPKpXeijpuT19p2peh';

const headers = new Headers({ 'Content-Type': 'application/json' });
const params = new URLSearchParams();

params.set('apiKey', apiKey);

const options = new RequestOptions({
  headers: headers,
  search: params
});

const jsonResponse = ((response: Response) => response.json());
const jsonError = (error: Response) => {
  const json = error.json();
  json['status'] = error.status;
  return Observable.throw(json);
};

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

  get(url: string): Observable<Response> {
    return this.http
      .get(`${baseUrl}${url}`, options)
      .map(jsonResponse)
      .catch(jsonError);
  }

  post(url: string, body: any): Observable<Response> {
    const bodyString = JSON.stringify(body);
    return this.http
      .post(`${baseUrl}${url}`, bodyString, options)
      .map(jsonResponse)
      .catch(jsonError);
  }

}
