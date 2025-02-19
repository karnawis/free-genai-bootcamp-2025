import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySessionShowComponent } from './study-session-show.component';

describe('StudySessionShowComponent', () => {
  let component: StudySessionShowComponent;
  let fixture: ComponentFixture<StudySessionShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudySessionShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudySessionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
