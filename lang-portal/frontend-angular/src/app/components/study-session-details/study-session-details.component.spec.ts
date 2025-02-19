import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySessionDetailsComponent } from './study-session-details.component';

describe('StudySessionDetailsComponent', () => {
  let component: StudySessionDetailsComponent;
  let fixture: ComponentFixture<StudySessionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudySessionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudySessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
