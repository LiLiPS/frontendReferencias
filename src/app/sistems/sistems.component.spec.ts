import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemsComponent } from './sistems.component';

describe('SistemsComponent', () => {
  let component: SistemsComponent;
  let fixture: ComponentFixture<SistemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
