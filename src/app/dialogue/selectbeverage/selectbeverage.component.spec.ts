import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbeverageComponent } from './selectbeverage.component';

describe('SelectbeverageComponent', () => {
  let component: SelectbeverageComponent;
  let fixture: ComponentFixture<SelectbeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectbeverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectbeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
