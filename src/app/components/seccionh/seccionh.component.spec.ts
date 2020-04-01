import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionhComponent } from './seccionh.component';

describe('SeccionhComponent', () => {
  let component: SeccionhComponent;
  let fixture: ComponentFixture<SeccionhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
