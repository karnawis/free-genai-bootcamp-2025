import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedStudySessionListComponent } from './paginated-study-session-list.component';

describe('PaginatedStudySessionListComponent', () => {
  let component: PaginatedStudySessionListComponent;
  let fixture: ComponentFixture<PaginatedStudySessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatedStudySessionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatedStudySessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
