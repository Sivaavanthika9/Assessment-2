import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGadgetsComponent } from './edit-gadgets.component';

describe('EditGadgetsComponent', () => {
  let component: EditGadgetsComponent;
  let fixture: ComponentFixture<EditGadgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditGadgetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
