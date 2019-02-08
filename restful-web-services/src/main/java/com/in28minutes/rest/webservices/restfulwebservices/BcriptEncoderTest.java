package com.in28minutes.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcriptEncoderTest {



  public static void main(String[] args) {
    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    for (int i=0; i <= 10; i++) {
      String endodedString = bCryptPasswordEncoder.encode("password@!23@#!");
    }
  }
}
