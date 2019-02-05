package com.in28minutes.rest.webservices.restfulwebservices.controller;

import com.in28minutes.rest.webservices.restfulwebservices.bean.HelloWorldBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {


  @GetMapping("/hello-world")
  public String helloWorld() {
    return "Hello World!";
  }

  @GetMapping("/hello-world")
  public HelloWorldBean helloWorldBean() {
    return new HelloWorldBean("Hello World!");
  }
}