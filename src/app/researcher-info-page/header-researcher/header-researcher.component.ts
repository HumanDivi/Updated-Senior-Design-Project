import { Researcher } from './../../model/researcher.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-researcher',
  templateUrl: './header-researcher.component.html',
  styleUrls: ['./header-researcher.component.scss'],
})
export class HeaderResearcherComponent implements OnInit {
  @Input() researcher: Researcher;
  constructor() {}

  ngOnInit(): void {}
}
