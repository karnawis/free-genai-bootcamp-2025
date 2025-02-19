import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedGroupListComponent } from './paginated-group-list.component';

describe('PaginatedGroupListComponent', () => {
  let component: PaginatedGroupListComponent;
  let fixture: ComponentFixture<PaginatedGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatedGroupListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatedGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
