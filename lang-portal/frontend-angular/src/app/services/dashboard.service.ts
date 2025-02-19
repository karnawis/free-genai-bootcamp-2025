import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:5000/api/dashboard';

  constructor(private http: HttpClient) { }

  getLastStudySession(): Observable<any> {
    return this.http.get(`${this.apiUrl}/last_study_session`);
  }

  getStudyProgress(): Observable<any> {
    return this.http.get(`${this.apiUrl}/study_progress`);
  }

  getQuickStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/quick-stats`);
  }
}
