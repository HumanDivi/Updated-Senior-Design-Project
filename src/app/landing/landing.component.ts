// import { LandingService } from './landing.service';
import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  // providers:[LandingService]
})
export class LandingComponent implements OnInit {
  defaultDescription="please enter your message here";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    // remove console line when logic is in place
    console.log(form);
    const value = form.value;
    // const newHelpData = new HelpData(value.name);

  }
}
