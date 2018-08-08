import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../models/user.model";
import {UserService} from "../../../services/user/user.service";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  $user: Observable<UserModel>;
  userName: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userName = params['username'];
      this.$user = this.userService.fetchSingle(this.userName);
      console.log(this.$user);
    });
  }

}
