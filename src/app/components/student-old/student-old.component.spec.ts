import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOldComponent } from './student-old.component';

describe('StudentOldComponent', () => {
  let component: StudentOldComponent;
  let fixture: ComponentFixture<StudentOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
