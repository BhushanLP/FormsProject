import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSampleComponent } from './template-sample.component';

describe('TemplateSampleComponent', () => {
  let component: TemplateSampleComponent;
  let fixture: ComponentFixture<TemplateSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSampleComponent]
    });
    fixture = TestBed.createComponent(TemplateSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
