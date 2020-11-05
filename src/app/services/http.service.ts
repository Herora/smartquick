import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions: { headers; observe; } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    observe: 'response'
  };
  constructor(private http: HttpClient) { }

  dataList(){
    return this.http.get(`${URL}/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json`,
    {responseType: 'text'});
  }
}
