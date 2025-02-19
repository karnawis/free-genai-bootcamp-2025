import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastStudySessionComponent } from './last-study-session.component';

describe('LastStudySessionComponent', () => {
  let component: LastStudySessionComponent;
  let fixture: ComponentFixture<LastStudySessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastStudySessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastStudySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
