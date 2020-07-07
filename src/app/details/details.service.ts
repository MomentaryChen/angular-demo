import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
const Host = environment.host;
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  ErrorTypeMsgAPI = `${Host}/GetErrorTypeMsg`;
  CodeDiffAPI = `${Host}/GetCodeDiff`;
  constructor(private http: HttpClient) { }

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
