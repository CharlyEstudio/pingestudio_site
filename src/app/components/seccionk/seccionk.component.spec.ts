import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionkComponent } from './seccionk.component';

describe('SeccionkComponent', () => {
  let component: SeccionkComponent;
  let fixture: ComponentFixture<SeccionkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
