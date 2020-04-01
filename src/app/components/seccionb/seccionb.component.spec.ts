import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionbComponent } from './seccionb.component';

describe('SeccionbComponent', () => {
  let component: SeccionbComponent;
  let fixture: ComponentFixture<SeccionbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
