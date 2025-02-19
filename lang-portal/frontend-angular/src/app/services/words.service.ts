import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private apiUrl = 'http://localhost:5000/api/words';

  constructor(private http: HttpClient) { }

  getWords(page: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  }

  getWord(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
