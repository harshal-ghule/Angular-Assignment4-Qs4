import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSCompComponent } from './oscomp.component';

describe('OSCompComponent', () => {
  let component: OSCompComponent;
  let fixture: ComponentFixture<OSCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OSCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
