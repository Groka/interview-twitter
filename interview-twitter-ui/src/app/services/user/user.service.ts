import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../models/user.model";
import {Observable} from "rxjs/Observable";

const ENDPOINT_BASE = '/api/users';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  fetchAll(): Observable<UserModel> {
    return this.http.get<UserModel>(ENDPOINT_BASE);
  }

  fetchSingle(username: string) {
    return this.http.get<UserModel>(ENDPOINT_BASE + '/' + username);
  }

  // create(tweetContent: string) {
  //   return this.http.post<UserModel>(ENDPOINT_BASE, tweetContent);
  // }

}
