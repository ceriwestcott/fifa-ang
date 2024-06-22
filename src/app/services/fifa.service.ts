import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FifaService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://seahorse-app-wr4oe.ondigitalocean.app/';

  registerUser(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}register`, user);
  }

  loginUser(user: any) {}

  getMatches() {}
}
