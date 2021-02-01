import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopladiesComponent } from './shopladies.component';

describe('ShopladiesComponent', () => {
  let component: ShopladiesComponent;
  let fixture: ComponentFixture<ShopladiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopladiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopladiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
