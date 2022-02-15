import { DataStorageService } from './data-storage.service';
import { Injectable } from '@angular/core';

import { PublicationService } from './publication.service';
import { Publication } from './../model/publication.model';
import { HttpClient } from '@angular/common/http';

import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

// here we will check if we have all the data loaded from the database before the page is loaded
@Injectable({ providedIn: 'root' })
export class PublicationResolverService implements Resolve<Publication[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private publicationService: PublicationService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const publications = this.publicationService.getPublication();
    if (publications.length === 0) {
      return this.dataStorageService.fetchPublication();
    } else {
      publications;
    }
  }
}
