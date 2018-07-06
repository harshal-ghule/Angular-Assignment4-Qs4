import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PLCompComponent } from './plcomp.component';

describe('PLCompComponent', () => {
  let component: PLCompComponent;
  let fixture: ComponentFixture<PLCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PLCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PLCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
