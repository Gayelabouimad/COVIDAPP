import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedstaffComponent } from './medstaff.component';

describe('MedstaffComponent', () => {
  let component: MedstaffComponent;
  let fixture: ComponentFixture<MedstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
