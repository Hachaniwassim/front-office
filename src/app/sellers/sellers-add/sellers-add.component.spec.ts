import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersAddComponent } from './sellers-add.component';

describe('SellersAddComponent', () => {
  let component: SellersAddComponent;
  let fixture: ComponentFixture<SellersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
