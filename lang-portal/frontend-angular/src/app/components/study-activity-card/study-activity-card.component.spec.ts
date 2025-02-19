import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyActivityCardComponent } from './study-activity-card.component';

describe('StudyActivityCardComponent', () => {
  let component: StudyActivityCardComponent;
  let fixture: ComponentFixture<StudyActivityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyActivityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
