import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsInGroupComponent } from './words-in-group.component';

describe('WordsInGroupComponent', () => {
  let component: WordsInGroupComponent;
  let fixture: ComponentFixture<WordsInGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsInGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordsInGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
