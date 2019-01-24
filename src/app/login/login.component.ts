import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid credential';
  invalidLogin = false;

  constructor(private router: Router) {
  }

  handleLogin() {
    if (this.username === 'in28minutes' && this.password === 'dummy') {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

  ngOnInit() {
  }

}
