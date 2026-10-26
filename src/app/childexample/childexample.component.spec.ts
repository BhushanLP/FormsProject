import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildexampleComponent } from './childexample.component';

describe('ChildexampleComponent', () => {
  let component: ChildexampleComponent;
  let fixture: ComponentFixture<ChildexampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildexampleComponent]
    });
    fixture = TestBed.createComponent(ChildexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
