import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import {UserModel} from "../../../models/user.model";
import { TweetService } from '../../../services/tweet/tweet.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() user: UserModel;

  constructor(private tweetService: TweetService) {

  }

  ngOnInit() {
    this.tweetService.fetchForUser(this.user.username).subscribe(tweets => {
      this.user.numberOfTweets = tweets.length;
    });
  }
}
