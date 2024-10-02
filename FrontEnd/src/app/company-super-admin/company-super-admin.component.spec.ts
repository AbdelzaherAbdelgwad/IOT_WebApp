import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySuperAdminComponent } from './company-super-admin.component';

describe('CompanySuperAdminComponent', () => {
  let component: CompanySuperAdminComponent;
  let fixture: ComponentFixture<CompanySuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySuperAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
