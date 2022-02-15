import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavResearcherComponent } from './nav-researcher.component';

describe('NavProfComponent', () => {
  let component: NavResearcherComponent;
  let fixture: ComponentFixture<NavResearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavResearcherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavResearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
