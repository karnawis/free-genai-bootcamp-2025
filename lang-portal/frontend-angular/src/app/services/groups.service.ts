import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private apiUrl = 'http://localhost:5000/api/groups';

  constructor(private http: HttpClient) { }

  getGroups(page: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  }

  getGroup(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getGroupWords(groupId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${groupId}/words`);
  }

  getGroupStudySessions(groupId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${groupId}/study_sessions`);
  }
}
