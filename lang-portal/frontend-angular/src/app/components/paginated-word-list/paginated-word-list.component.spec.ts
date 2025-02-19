import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedWordListComponent } from './paginated-word-list.component';

describe('PaginatedWordListComponent', () => {
  let component: PaginatedWordListComponent;
  let fixture: ComponentFixture<PaginatedWordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatedWordListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatedWordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
