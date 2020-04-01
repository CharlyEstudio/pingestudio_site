import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccioneComponent } from './seccione.component';

describe('SeccioneComponent', () => {
  let component: SeccioneComponent;
  let fixture: ComponentFixture<SeccioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
