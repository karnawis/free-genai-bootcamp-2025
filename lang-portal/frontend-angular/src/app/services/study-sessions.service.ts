import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudySessionsService {

  private apiUrl = 'http://localhost:5000/api/study_sessions';

  constructor(private http: HttpClient) { }

  getStudySessions(page: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  }

  getStudySession(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getStudySessionWords(sessionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${sessionId}/words`);
  }
}
