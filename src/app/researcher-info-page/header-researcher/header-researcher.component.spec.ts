import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderResearcherComponent } from './header-researcher.component';

describe('HeaderResearcherComponent', () => {
  let component: HeaderResearcherComponent;
  let fixture: ComponentFixture<HeaderResearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderResearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderResearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
