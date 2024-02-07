import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGadgetsComponent } from './add-gadgets.component';

describe('AddGadgetsComponent', () => {
  let component: AddGadgetsComponent;
  let fixture: ComponentFixture<AddGadgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddGadgetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
