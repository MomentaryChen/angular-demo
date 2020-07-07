import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }
  ErrorTypeMsgAPI = `http://140.134.26.87:10012/GetErrorTypeMsg`;
  CodeDiffAPI = `http://140.134.26.87:10012/GetCodeDiff`;
  getErrorTypeMsg(problem: string): Observable<any> {

    let params = new HttpParams();
    const body = JSON.stringify(params);
    return this.http.post(this.ErrorTypeMsgAPI + `?problem=${problem}`, body);
  }

  getRecords(id: string, problem: string): Observable<any> {

    let params = new HttpParams();
    const body = JSON.stringify(params);
    return this.http.post(this.CodeDiffAPI + `?nid=${id}&problem=problem_2_bmi`, body);
  }

}
