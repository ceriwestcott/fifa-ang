import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Login } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class FifaService {
  constructor(private http: HttpClient) {}
  baseUrl = 'localhost:4210';

  registerUser(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(loginData: Login): Observable<any> {
    try {
      console.log(loginData);
      return this.http.post(`${this.baseUrl}/login`, loginData);
    } catch (err) {
      return of(err);
    }
  }

  getMatches() {}
}
