import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetailComponent } from './bank-detail.component';

describe('BankDetailComponent', () => {
  let component: BankDetailComponent;
  let fixture: ComponentFixture<BankDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
