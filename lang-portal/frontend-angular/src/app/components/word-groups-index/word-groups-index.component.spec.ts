import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGroupsIndexComponent } from './word-groups-index.component';

describe('WordGroupsIndexComponent', () => {
  let component: WordGroupsIndexComponent;
  let fixture: ComponentFixture<WordGroupsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordGroupsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordGroupsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
