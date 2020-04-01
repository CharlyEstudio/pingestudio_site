import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecciondComponent } from './secciond.component';

describe('SecciondComponent', () => {
  let component: SecciondComponent;
  let fixture: ComponentFixture<SecciondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecciondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecciondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
