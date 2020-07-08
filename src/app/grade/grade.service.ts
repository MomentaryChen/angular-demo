import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
const Host = environment.host;

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  GradeAPI = `${Host}/GetGrades`;
  constructor(private http: HttpClient) { }

  getGrade(): Observable<any> {
    return this.http.get(this.GradeAPI);
  }
}
