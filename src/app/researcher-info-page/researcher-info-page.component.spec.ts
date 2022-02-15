import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherInfoPageComponent } from './researcher-info-page.component';

describe('ResearchProfessorPageComponent', () => {
  let component: ResearcherInfoPageComponent;
  let fixture: ComponentFixture<ResearcherInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearcherInfoPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
