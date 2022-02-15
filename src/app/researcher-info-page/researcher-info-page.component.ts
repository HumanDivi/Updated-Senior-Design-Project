import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DataStorageService } from '../services/data-storage.service';
// import { PublicationService } from './../services/publication.service';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-researcher-info-page',
  templateUrl: './researcher-info-page.component.html',
  styleUrls: ['./researcher-info-page.component.scss'],
})
export class ResearcherInfoPageComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // user this for header to do *ngIf=!Authenticate or yes then show the component or link
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
    // this.onSaveData();
    // this.onFetchData();
  }
  // do not think onSaveData is needed. It can be used later if we want a user to cange data from UI and push it to the database. If we initialize this it
  // will read from the UI with does not have any data
  onSaveData() {
    this.dataStorageService.storePublication();
  }
  onFetchData() {
    this.dataStorageService.fetchPublication().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
// refactor to researcher-info-page
