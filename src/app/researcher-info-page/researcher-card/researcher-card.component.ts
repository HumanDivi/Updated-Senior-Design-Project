import { PublicationService } from '../../services/publication.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Publication } from '../../model/publication.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-researcher-card',
  templateUrl: './researcher-card.component.html',
  styleUrls: ['./researcher-card.component.scss'],
})
export class ResearcherCardComponent implements OnInit, OnDestroy {
  // @Input() publication: Publication;

  // @Input() index: number;

  publications: Publication[];
  private igChangeSub: Subscription;

  constructor(private publicationService: PublicationService) {}

  ngOnInit(): void {
    this.publications = this.publicationService.getPublication();

    // this will basically show any changes made to publications
    this.igChangeSub = this.publicationService.publicationsChanged.subscribe(
      (publication: Publication[]) => {
        this.publications = publication;
      }
    );
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
