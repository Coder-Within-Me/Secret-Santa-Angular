import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourWishlistComponent } from './your-wishlist.component';

describe('YourWishlistComponent', () => {
  let component: YourWishlistComponent;
  let fixture: ComponentFixture<YourWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourWishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
