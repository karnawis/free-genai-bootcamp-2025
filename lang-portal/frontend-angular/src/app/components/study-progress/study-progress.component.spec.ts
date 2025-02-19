import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgressComponent } from './study-progress.component';

describe('StudyProgressComponent', () => {
  let component: StudyProgressComponent;
  let fixture: ComponentFixture<StudyProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
