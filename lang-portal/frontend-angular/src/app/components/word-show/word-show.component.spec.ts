import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordShowComponent } from './word-show.component';

describe('WordShowComponent', () => {
  let component: WordShowComponent;
  let fixture: ComponentFixture<WordShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
