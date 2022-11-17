import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCompComponent } from './employee-comp.component';

describe('EmployeeCompComponent', () => {
  let component: EmployeeCompComponent;
  let fixture: ComponentFixture<EmployeeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
