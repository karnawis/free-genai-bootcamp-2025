import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyStatisticsComponent } from './study-statistics.component';

describe('StudyStatisticsComponent', () => {
  let component: StudyStatisticsComponent;
  let fixture: ComponentFixture<StudyStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
