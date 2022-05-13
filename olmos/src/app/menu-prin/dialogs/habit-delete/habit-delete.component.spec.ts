import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitDeleteComponent } from './habit-delete.component';

describe('HabitDeleteComponent', () => {
  let component: HabitDeleteComponent;
  let fixture: ComponentFixture<HabitDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
