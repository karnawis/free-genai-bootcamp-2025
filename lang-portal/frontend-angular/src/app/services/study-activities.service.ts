import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudyActivitiesService {

  private apiUrl = 'http://localhost:5000/api/study_activities';

  constructor(private http: HttpClient) { }

  getStudyActivities(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getStudyActivity(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getStudySessions(activityId: number, page: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${activityId}/study_sessions?page=${page}&pageSize=${pageSize}`);
  }

  createStudyActivity(activity: any): Observable<any> {
    return this.http.post(this.apiUrl, activity);
  }
}
