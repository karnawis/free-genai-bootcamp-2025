import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickStatsComponent } from './quick-stats.component';

describe('QuickStatsComponent', () => {
  let component: QuickStatsComponent;
  let fixture: ComponentFixture<QuickStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
