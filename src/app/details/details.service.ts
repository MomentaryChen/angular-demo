import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }
  ErrorTypeMsgAPI = `http://140.134.26.87:10012/GetErrorTypeMsg`;
  getErrorTypeMsg(problem: string): Observable<any> {

    let params = new HttpParams();
    const body = JSON.stringify(params);
    return this.http.post(this.ErrorTypeMsgAPI + `?problem=${problem}`, body);
  }

}
