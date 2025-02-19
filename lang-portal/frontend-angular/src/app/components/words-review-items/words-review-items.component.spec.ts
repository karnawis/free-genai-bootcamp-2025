import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsReviewItemsComponent } from './words-review-items.component';

describe('WordsReviewItemsComponent', () => {
  let component: WordsReviewItemsComponent;
  let fixture: ComponentFixture<WordsReviewItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsReviewItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordsReviewItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
