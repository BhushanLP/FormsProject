import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsobsComponent } from './rxjsobs.component';

describe('RxjsobsComponent', () => {
  let component: RxjsobsComponent;
  let fixture: ComponentFixture<RxjsobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsobsComponent]
    });
    fixture = TestBed.createComponent(RxjsobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
