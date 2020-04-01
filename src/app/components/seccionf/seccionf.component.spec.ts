import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionfComponent } from './seccionf.component';

describe('SeccionfComponent', () => {
  let component: SeccionfComponent;
  let fixture: ComponentFixture<SeccionfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
