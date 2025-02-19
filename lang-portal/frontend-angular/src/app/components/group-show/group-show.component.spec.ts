import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupShowComponent } from './group-show.component';

describe('GroupShowComponent', () => {
  let component: GroupShowComponent;
  let fixture: ComponentFixture<GroupShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
