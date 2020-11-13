import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSistemsComponent } from './navbar-sistems.component';

describe('NavbarSistemsComponent', () => {
  let component: NavbarSistemsComponent;
  let fixture: ComponentFixture<NavbarSistemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSistemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSistemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
