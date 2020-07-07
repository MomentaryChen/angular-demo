import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  AssignmentListAPI = `http://140.134.26.87:10012/GetAssignmentList`;
  constructor(private http: HttpClient) { }

  getAssignmentList(): Observable<any> {

    return this.http.get(this.AssignmentListAPI);
  }
}
