import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutComponent } from './inout.component';

describe('InoutComponent', () => {
  let component: InoutComponent;
  let fixture: ComponentFixture<InoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InoutComponent]
    });
    fixture = TestBed.createComponent(InoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
