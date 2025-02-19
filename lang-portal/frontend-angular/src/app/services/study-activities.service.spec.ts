import { TestBed } from '@angular/core/testing';

import { StudyActivitiesService } from './study-activities.service';

describe('StudyActivitiesService', () => {
  let service: StudyActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
