import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHabitacionComponent } from './register-habitacion.component';

describe('RegisterHabitacionComponent', () => {
  let component: RegisterHabitacionComponent;
  let fixture: ComponentFixture<RegisterHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
