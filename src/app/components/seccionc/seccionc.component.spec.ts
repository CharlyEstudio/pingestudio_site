import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccioncComponent } from './seccionc.component';

describe('SeccioncComponent', () => {
  let component: SeccioncComponent;
  let fixture: ComponentFixture<SeccioncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccioncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccioncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
