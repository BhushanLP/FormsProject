import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentexampleComponent } from './parentexample.component';

describe('ParentexampleComponent', () => {
  let component: ParentexampleComponent;
  let fixture: ComponentFixture<ParentexampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentexampleComponent]
    });
    fixture = TestBed.createComponent(ParentexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
