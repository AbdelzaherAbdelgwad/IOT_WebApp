import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBarColumnComponentComponent } from './multi-bar-column-component.component';

describe('MultiBarColumnComponentComponent', () => {
  let component: MultiBarColumnComponentComponent;
  let fixture: ComponentFixture<MultiBarColumnComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiBarColumnComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiBarColumnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
