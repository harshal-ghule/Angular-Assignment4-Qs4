import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DBCompComponent } from './dbcomp.component';

describe('DBCompComponent', () => {
  let component: DBCompComponent;
  let fixture: ComponentFixture<DBCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
