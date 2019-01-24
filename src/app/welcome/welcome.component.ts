import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['names']);
    this.username = this.activatedRoute.snapshot.params['name'];
  }

}
