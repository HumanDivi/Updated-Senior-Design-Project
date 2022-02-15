import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Publication } from '../model/publication.model';
import { Subject } from 'rxjs';

// This will be changed to get data from database
@Injectable()
export class PublicationService {
  publicationsChanged = new Subject<Publication[]>();
  private publications: Publication[] = [];

  // private publications: Publication[] = [
  //   new Publication('test', 'test', ''),
  //   new Publication('test1', 'test1', ''),
  //   new Publication('test2', 'test2', ''),
  // ];

  getPublication() {
    return this.publications.slice();
  }
  // dont think this add function might be needed
  addPublication(publication: Publication) {
    this.publications.push(publication);
    this.publicationsChanged.next(this.publications.slice());
  }

  setPublication(publications: Publication[]) {
    this.publications = publications;
    this.publicationsChanged.next(this.publications.slice());
  }
}
