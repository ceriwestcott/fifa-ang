import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { UserToken } from '../models/token';
import { Login } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private tokenSubject?: BehaviorSubject<UserToken>;
  public token?: Observable<UserToken>;
  constructor(private router: Router, private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<{
      token: string;
    }>(JSON.parse(localStorage.getItem('token') || '{}'));
    this.token = this.tokenSubject?.asObservable();
  }

  login(user: Login): Observable<any> {
    return this.http.post('http://localhost:4210/login', user).pipe(
      map((token: any) => {
        localStorage.setItem('token', JSON.stringify(token));
        this.tokenSubject?.next(token);
        return token;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.tokenSubject?.next({ token: '' });
    this.router.navigate(['/login']);
  }

  public get tokenValue(): UserToken {
    return this.tokenSubject?.value;
  }
}















}
