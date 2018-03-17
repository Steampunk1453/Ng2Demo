import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  get(url: string): Observable<any>  {
    return this.http.get(url);
  }

  post(url: string, data: any): Observable<any> {
    let json = JSON.stringify(data);
    return this.http.post(url, json, httpOptions)
  }

  put(url: string, data: any): Observable<any> {
    let json = JSON.stringify(data);
    return this.http.put(url + data.id, json, httpOptions);
  }

  delete(url: string, data: any): Observable<any> {
    return this.http.delete(url + data.id, httpOptions);
  }

}