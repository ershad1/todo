import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = '';
  welcomeMessageFromService: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) {
  }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['names']);
    this.username = this.activatedRoute.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.username).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }
}
