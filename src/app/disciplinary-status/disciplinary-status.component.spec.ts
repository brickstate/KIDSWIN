import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaryStatusComponent } from './disciplinary-status.component';

describe('DisciplinaryStatusComponent', () => {
  let component: DisciplinaryStatusComponent;
  let fixture: ComponentFixture<DisciplinaryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinaryStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplinaryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
