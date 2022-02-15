import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherCardComponent } from './researcher-card.component';

describe('ProfessorCardComponent', () => {
  let component: ResearcherCardComponent;
  let fixture: ComponentFixture<ResearcherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearcherCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
