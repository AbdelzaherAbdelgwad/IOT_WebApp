import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSuperAdminComponent } from './hospital-super-admin.component';

describe('HospitalSuperAdminComponent', () => {
  let component: HospitalSuperAdminComponent;
  let fixture: ComponentFixture<HospitalSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalSuperAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
