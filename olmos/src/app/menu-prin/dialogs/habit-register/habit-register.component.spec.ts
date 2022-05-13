import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitRegisterComponent } from './habit-register.component';

describe('HabitRegisterComponent', () => {
  let component: HabitRegisterComponent;
  let fixture: ComponentFixture<HabitRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
