import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyActivityShowComponent } from './study-activity-show.component';

describe('StudyActivityShowComponent', () => {
  let component: StudyActivityShowComponent;
  let fixture: ComponentFixture<StudyActivityShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyActivityShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyActivityShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
