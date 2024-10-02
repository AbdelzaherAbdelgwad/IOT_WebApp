import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCompanyComponent } from './smart-company.component';

describe('SmartCompanyComponent', () => {
  let component: SmartCompanyComponent;
  let fixture: ComponentFixture<SmartCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
