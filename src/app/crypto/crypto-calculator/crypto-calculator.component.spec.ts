import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCalculatorComponent } from './crypto-calculator.component';

describe('CryptoCalculatorComponent', () => {
  let component: CryptoCalculatorComponent;
  let fixture: ComponentFixture<CryptoCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
