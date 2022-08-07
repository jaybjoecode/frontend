import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServService {
  constructor(private http: HttpClient) {}

  getImage(): Observable<Blob> {
    return this.http.get('http://localhost:2000/image', { responseType: 'blob' });
  }

  getAudio(): Observable<any> {
    return this.http.get('http://localhost:2000/audio',  { responseType: 'blob' });
  }
}
