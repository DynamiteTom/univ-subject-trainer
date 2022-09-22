import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterSubjectDataComponent } from './enter-subject-data.component';

describe('EnterSubjectDataComponent', () => {
  let component: EnterSubjectDataComponent;
  let fixture: ComponentFixture<EnterSubjectDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterSubjectDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterSubjectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
