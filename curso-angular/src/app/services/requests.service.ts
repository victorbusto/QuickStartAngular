import { HttpClient, HttpContext, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  public url: string;
  private _http:HttpClient
  
  constructor(http:HttpClient
  ) {
    this.url = "https://jsonplaceholder.typicode.com/posts";
    this._http = http;
   }

  getArticles() {
    return this._http.get(this.url);
  }
}
