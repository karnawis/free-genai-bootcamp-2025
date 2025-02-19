import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyActivitiesPaginatedListComponent } from './study-activities-paginated-list.component';

describe('StudyActivitiesPaginatedListComponent', () => {
  let component: StudyActivitiesPaginatedListComponent;
  let fixture: ComponentFixture<StudyActivitiesPaginatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyActivitiesPaginatedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyActivitiesPaginatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
