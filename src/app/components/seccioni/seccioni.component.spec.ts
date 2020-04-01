import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccioniComponent } from './seccioni.component';

describe('SeccioniComponent', () => {
  let component: SeccioniComponent;
  let fixture: ComponentFixture<SeccioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
