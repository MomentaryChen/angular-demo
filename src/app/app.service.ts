import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
const Host = environment.host;
@Injectable({
  providedIn: 'root'
})
export class AppService {
  AssignmentListAPI = `${Host}/GetAssignmentList`;
  constructor(private http: HttpClient) { }

  getAssignmentList(): Observable<any> {

    return this.http.get(this.AssignmentListAPI);
  }
}
