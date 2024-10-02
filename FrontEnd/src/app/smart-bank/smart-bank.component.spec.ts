import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBankComponent } from './smart-bank.component';

describe('SmartBankComponent', () => {
  let component: SmartBankComponent;
  let fixture: ComponentFixture<SmartBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
