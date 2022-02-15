import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-research-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.scss'],
})
export class ResearchPageComponent implements OnInit {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.onFetchData();
  }
  onSaveData() {
    this.dataStorageService.storePublication();
  }
  onFetchData() {
    this.dataStorageService.fetchPublication().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
