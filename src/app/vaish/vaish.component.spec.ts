import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaishComponent } from './vaish.component';

describe('VaishComponent', () => {
  let component: VaishComponent;
  let fixture: ComponentFixture<VaishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaishComponent]
    });
    fixture = TestBed.createComponent(VaishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
