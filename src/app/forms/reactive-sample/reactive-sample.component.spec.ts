import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSampleComponent } from './reactive-sample.component';

describe('ReactiveSampleComponent', () => {
  let component: ReactiveSampleComponent;
  let fixture: ComponentFixture<ReactiveSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveSampleComponent]
    });
    fixture = TestBed.createComponent(ReactiveSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
