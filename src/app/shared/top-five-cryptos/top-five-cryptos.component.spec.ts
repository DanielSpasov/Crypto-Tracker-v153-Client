import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveCryptosComponent } from './top-five-cryptos.component';

describe('TopFiveCryptosComponent', () => {
  let component: TopFiveCryptosComponent;
  let fixture: ComponentFixture<TopFiveCryptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFiveCryptosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFiveCryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
