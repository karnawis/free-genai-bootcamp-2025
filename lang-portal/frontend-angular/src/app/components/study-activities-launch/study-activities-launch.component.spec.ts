import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyActivitiesLaunchComponent } from './study-activities-launch.component';

describe('StudyActivitiesLaunchComponent', () => {
  let component: StudyActivitiesLaunchComponent;
  let fixture: ComponentFixture<StudyActivitiesLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyActivitiesLaunchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyActivitiesLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
