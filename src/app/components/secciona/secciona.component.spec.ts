import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionaComponent } from './secciona.component';

describe('SeccionaComponent', () => {
  let component: SeccionaComponent;
  let fixture: ComponentFixture<SeccionaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
