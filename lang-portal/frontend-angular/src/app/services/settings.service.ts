import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  resetHistory(): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset_history`, {});
  }

  fullReset(): Observable<any> {
    return this.http.post(`${this.apiUrl}/full_reset`, {});
  }
}
