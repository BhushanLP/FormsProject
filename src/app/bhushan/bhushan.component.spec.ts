import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhushanComponent } from './bhushan.component';

describe('BhushanComponent', () => {
  let component: BhushanComponent;
  let fixture: ComponentFixture<BhushanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BhushanComponent]
    });
    fixture = TestBed.createComponent(BhushanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
