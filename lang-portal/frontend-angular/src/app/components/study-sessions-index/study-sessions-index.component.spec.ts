import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySessionsIndexComponent } from './study-sessions-index.component';

describe('StudySessionsIndexComponent', () => {
  let component: StudySessionsIndexComponent;
  let fixture: ComponentFixture<StudySessionsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudySessionsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudySessionsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
