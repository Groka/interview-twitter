package com.javalanguagezone.interviewtwitter.controller;

import com.javalanguagezone.interviewtwitter.domain.User;
import com.javalanguagezone.interviewtwitter.repository.UserRepository;
import com.javalanguagezone.interviewtwitter.service.UserService;
import com.javalanguagezone.interviewtwitter.service.dto.UserDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;
import java.util.Map;

@RestController
public class UserController {

  private UserService userService;
  private UserRepository userRepository;

  public UserController(UserService userService, UserRepository userRepository) {
    this.userService = userService;
    this.userRepository = userRepository;
  }

  @GetMapping("/followers")
  public Collection<UserDTO> followers(Principal principal) {
    return userService.getUsersFollowers(principal);
  }

  @GetMapping("/following")
  public Collection<UserDTO> following(Principal principal) {
    return userService.getUsersFollowing(principal);
  }

  @GetMapping(value = "/users/{username}")
  public UserDTO user(@PathVariable String username) {
    return userService.getSingleUser(username);
  }

  @PostMapping(value = "/register")
  public ResponseEntity register(@RequestBody Map<String, Object> body) {
    User user = new User(body.get("username").toString(), body.get("password").toString(), body.get("fullname").toString());
    try {
      return ResponseEntity.ok(new UserDTO(userRepository.save(user)));
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(null);
    }
  }
}
