import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyActivitiesIndexComponent } from './study-activities-index.component';

describe('StudyActivitiesIndexComponent', () => {
  let component: StudyActivitiesIndexComponent;
  let fixture: ComponentFixture<StudyActivitiesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyActivitiesIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyActivitiesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
