import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarAdPage } from './car-ad.page';

describe('CarAdPage', () => {
  let component: CarAdPage;
  let fixture: ComponentFixture<CarAdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
