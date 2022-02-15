import { Researcher } from '../model/researcher.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ResearcherService {
  private researcher: Researcher[] = [];

  gerResearcher() {
    // return this.researcher
  }
}
