import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionjComponent } from './seccionj.component';

describe('SeccionjComponent', () => {
  let component: SeccionjComponent;
  let fixture: ComponentFixture<SeccionjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
