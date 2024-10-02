import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartHospitalComponent } from './smart-hospital.component';

describe('SmartHospitalComponent', () => {
  let component: SmartHospitalComponent;
  let fixture: ComponentFixture<SmartHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
