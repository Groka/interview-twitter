import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthService {

  http: HttpClient;

  constructor(private inj: Injector) {}

  login(username: string, password: string) {
    const authToken = this.generateAuthToken(username, password);
    this.setAuthToken(authToken);
    this.storeUsername(username);
  }

  register(model: any) {
    // this.login(model.username, model.password);
    this.http = this.inj.get(HttpClient);
    this.http.post<any>('/api/register', model).subscribe((user: any) => {
      console.log(user);
      this.login(user.username, user.password);
    });
  }

  getAuthToken(): string {
    const authToken = localStorage.getItem("token");
    return authToken ? authToken : "";
  }

  setAuthToken(authToken: string) {
    localStorage.setItem("token", authToken);
  }

  private clearAuthToken() {
    localStorage.removeItem("token");
  }

  private clearCredentials() {
    localStorage.removeItem("username");
  }

  generateAuthToken(username: string, password: string): string {
    return btoa(username + ":" + password);
  }

  getCurrentUser(): string {
    const username = localStorage.getItem("username");
    return username ? username : null;
  }

  private storeUsername(username: string) {
    localStorage.setItem("username", username);
  }

  logout() {
    this.clearAuthToken();
    this.clearCredentials();
  }
}
