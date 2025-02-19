import { TestBed } from '@angular/core/testing';

import { StudySessionsService } from './study-sessions.service';

describe('StudySessionsService', () => {
  let service: StudySessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudySessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
