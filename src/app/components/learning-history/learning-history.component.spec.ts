import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningHistoryComponent } from './learning-history.component';

describe('LearningHistoryComponent', () => {
  let component: LearningHistoryComponent;
  let fixture: ComponentFixture<LearningHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningHistoryComponent]
    });
    fixture = TestBed.createComponent(LearningHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
