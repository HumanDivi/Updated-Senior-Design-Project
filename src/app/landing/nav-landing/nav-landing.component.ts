import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-landing',
  templateUrl: './nav-landing.component.html',
  styleUrls: ['./nav-landing.component.scss']
})
export class NavLandingComponent implements OnInit {
  flag: boolean;
  constructor() { }

  ngOnInit(): void {}
  onSubscribe() {
    this.flag = true;
  }
  onSubscribeClose(){
    this.flag = false;
  }
}
