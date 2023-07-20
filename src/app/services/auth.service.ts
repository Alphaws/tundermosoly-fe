import {Injectable} from '@angular/core';
import {User} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://example.com/api/auth'; // Cseréld le a tényleges API URL-re

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService,

  ) { }

  login(email: string, password: string) {
    const credentials = {email, password};
    return this.http.post<User>(`${this.apiUrl}/login`, credentials).pipe(
      map((response: User): string|null => {
        if (response && response.token) {
          localStorage.setItem('accessToken', response.token);
          return response.token;
        }
        return null;
      })
    );
  }
    logout(){
      localStorage.removeItem('accessToken');
    }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  getLoggedInUser(): User | null {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedToken = this.jwtHelperService.decodeToken();
      return decodedToken.user;
    }
    return null;
  }

}
