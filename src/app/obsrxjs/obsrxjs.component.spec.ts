import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsrxjsComponent } from './obsrxjs.component';

describe('ObsrxjsComponent', () => {
  let component: ObsrxjsComponent;
  let fixture: ComponentFixture<ObsrxjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObsrxjsComponent]
    });
    fixture = TestBed.createComponent(ObsrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
