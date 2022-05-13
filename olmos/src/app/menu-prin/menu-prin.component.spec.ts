import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrinComponent } from './menu-prin.component';

describe('MenuPrinComponent', () => {
  let component: MenuPrinComponent;
  let fixture: ComponentFixture<MenuPrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPrinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
