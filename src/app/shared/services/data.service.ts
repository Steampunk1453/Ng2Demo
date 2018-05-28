import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Store} from "@ngrx/store";
import {INCREMENT} from "../counter";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface AppState {
  counter: number;
}


@Injectable()
export class DataService {

  counter: Observable<number>;

  constructor(private http: HttpClient,
              private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  get(url: string): Observable<any>  {
    return this.http.get(url);
  }

  getById(url: string, data: number): Observable<any>  {
    return this.http.get(url + data);
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
    return this.http.delete(url + data, httpOptions);
  }

}
