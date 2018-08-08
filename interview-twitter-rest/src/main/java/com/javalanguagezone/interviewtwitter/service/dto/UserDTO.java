package com.javalanguagezone.interviewtwitter.service.dto;

import com.javalanguagezone.interviewtwitter.domain.User;
import com.javalanguagezone.interviewtwitter.repository.TweetRepository;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import static lombok.AccessLevel.PRIVATE;

@Getter
@NoArgsConstructor(access = PRIVATE)
public class UserDTO {
  private Long id;
  private String username;
  private Integer numberOfTweets;
  private Integer numberOfFollowers;
  private Integer numberOfUsersFollowing;
  private String fullName;

//  @Autowired
//  private TweetRepository tweetRepository;

  public UserDTO(User user) {
    this.id = user.getId();
    this.username = user.getUsername();
    this.fullName = user.getFullName();

    this.numberOfTweets = user.getTweets().size();
    this.numberOfFollowers = user.getFollowers().size();
    this.numberOfUsersFollowing = user.getFollowing().size();
  }
}
