import { AuthService } from '../services/auth.service';
import { PublicationService } from './publication.service';
import { Publication } from './../model/publication.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
// this class is an issue right now

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  isLoaded = false;

  constructor(
    private http: HttpClient,
    private publicationService: PublicationService,
    private authService: AuthService
  ) {}

  // Need to impliment a loading flag and that can be done in the future. This is not needed, resolver will take care of loading

  // do know know we need to store from the UI. SO this might not be needed, it is not currently being used
  storePublication() {
    const publications = this.publicationService.getPublication();
    return this.http
      .put(
        'https://research-connect-90dbb.firebaseio.com/publication.json',
        publications
      )
      .subscribe((publications) => {
        console.log(publications);
      });
  }

  fetchPublication() {
    return this.http
      .get<Publication[]>(
        'https://research-connect-90dbb.firebaseio.com/publication.json'
      )
      .pipe(
        map((publications) => {
          return publications.map((publication) => {
            return {
              ...publication,
              description: publication.description
                ? publication.description
                : '',
            };
          });
        }),
        tap((publications) => {
          //   this.isLoaded = false;
          this.publicationService.setPublication(publications);
        })
      );
    this.isLoaded = true;
  }
}
