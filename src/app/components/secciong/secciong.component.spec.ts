import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecciongComponent } from './secciong.component';

describe('SecciongComponent', () => {
  let component: SecciongComponent;
  let fixture: ComponentFixture<SecciongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecciongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecciongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
