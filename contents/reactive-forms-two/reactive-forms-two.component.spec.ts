import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsTwoComponent } from './reactive-forms-two.component';

describe('ReactiveFormsTwoComponent', () => {
  let component: ReactiveFormsTwoComponent;
  let fixture: ComponentFixture<ReactiveFormsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
