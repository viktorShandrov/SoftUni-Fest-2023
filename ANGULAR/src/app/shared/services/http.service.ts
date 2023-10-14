import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private HTTP: HttpClient) {}
  getRequest(url: string) {
    return this.HTTP.get(url);
  }
  postRequest(url: string, body: any, options?: any) {
    if (options && !options.headers['Content-Type']) {
      options.headers['Content-Type'] = 'application/json';
    }
    return this.HTTP.post(url, body, options);
  }
}
